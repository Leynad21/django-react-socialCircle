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
    answer = AnswerSerializer(many=True, read_only=True)

    class Meta:
        model = Question
        fields = [
            'quiz',
            'title',
            'answer',
        ]

