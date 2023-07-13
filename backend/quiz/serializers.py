from rest_framework import serializers
from .models import Quiz, Question, Answer


class QuizSerializer(serializers.ModelSerializer):

    question_count = serializers.SerializerMethodField("getQuestionCount")
    author_username = serializers.CharField(source="author.username", read_only=True)

    class Meta:
        model = Quiz
        fields = [
            'id',
            'title',
            'author',
            'author_username',
            'question_count',
            'slug',
            'created_at',
        ]
        read_only_fields = ['author']

    def getQuestionCount(self, obj):
        return obj.question_count
    
    def create(self, validated_data):
        validated_data['author'] = self.context['request'].user
        return super().create(validated_data)
    



class AnswerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Answer
        fields = [
            'id',
            'answer_text',
            'is_right',
        ]


class QuestionSerializer(serializers.ModelSerializer):

    quiz = QuizSerializer(read_only=True)
    answers = AnswerSerializer(many=True)

    class Meta:
        model = Question
        fields = [
            'quiz',
            'title',
            'id',
            'method',
            'answers',
        ]

    def create(self, validated_data):
        answers_data = validated_data.pop('answers', [])
        question = Question.objects.create(**validated_data)

        for answer_data in answers_data:
            Answer.objects.create(question=question, **answer_data)

        return question
    
    def update(self, instance, validated_data):
        # Update the instance fields
        instance.title = validated_data.pop('title', instance.title)
        instance.method = validated_data.pop('method', instance.method)

        # Update the associated answers
        answers_data = validated_data.pop('answers', [])
        instance.answers.all().delete()  # Delete existing answers
        for answer_data in answers_data:
            Answer.objects.create(question=instance, **answer_data)

        instance.save()
        return instance

