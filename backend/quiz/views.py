from django.shortcuts import render
from rest_framework import generics, permissions, status
from rest_framework.response import Response
from .models import Quiz, Question
from .serializers import QuizSerializer, QuestionSerializer
from rest_framework.views import APIView

# Create your views here.

class ListCreateQuiz(generics.ListCreateAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer
    

class RetrieveUpdateDestroyQuiz(generics.RetrieveUpdateDestroyAPIView):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer
    lookup_field = 'slug'

class QuizQuestion(APIView):

    def get(self, request, format=None, **kwargs):
        question = Question.objects.filter(quiz__title=kwargs['quizTitle'])
        serializer = QuestionSerializer(question, many=True)

        return Response(serializer.data)