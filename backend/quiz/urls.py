from django.urls import path
from .views import ListCreateQuiz, QuizQuestion, RetrieveUpdateDestroyQuiz


urlpatterns = [
    path("", ListCreateQuiz.as_view(), name="quiz_list"),
    path("<str:slug>", RetrieveUpdateDestroyQuiz.as_view(), name="quiz_detail"),
    path("question/<str:quizTitle>", QuizQuestion.as_view(), name='questions'),
]