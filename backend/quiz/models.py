from django.db import models
from django.contrib.auth import get_user_model
from django.utils.translation import gettext_lazy as _

User = get_user_model()

# Create your models here.


class Quiz(models.Model):
    author = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    title = models.CharField( _("Quiz Title") ,max_length=255, default=_("New Quiz"))
    created_at = models.DateTimeField(auto_now_add=True)

    @property
    def question_count(self):
        ''' Method to get num of Qs for this quiz, used in Serializer '''
        return self.questions.count()
 
    class Meta:
        verbose_name = _("Quiz")
        verbose_name_plural = _("Quizzes")
        ordering = ['id']

    def __str__(self):
        return self.title
  

class Updated(models.Model):
	
    date_updated = models.DateTimeField(_("Last Updated"), auto_now=True)
	
    class Meta:
        abstract=True
  

class Question(Updated):

    TYPE = (
         (0, _("Multiple Choices")),
    )

    quiz = models.ForeignKey(
		Quiz, 
		related_name='question', # need related name for hyper link related field to work
		on_delete=models.DO_NOTHING
	)
    method = models.IntegerField(_("Type of question"), choices=TYPE, default=0)
    title = models.CharField(max_length=255, default='')
    date_created = models.DateTimeField(_("Date Created"), auto_now_add=True)
    is_active = models.BooleanField(_("Active Status"), default=False)

    class Meta:
        verbose_name = _("Question")
        verbose_name_plural = _("Questions")
        ordering = ['id']

    def __str__(self):
	    return self.prompt


class Answer(Updated):
    question = models.ForeignKey(
		Question, 
		related_name='answer', 
		on_delete=models.DO_NOTHING
	)
    answer_text = models.CharField(max_length=255)
    is_right = models.BooleanField(default=False)
        
    class Meta:
        verbose_name = _("Answer")
        verbose_name_plural = _("Answers")
        ordering = ['id']

    def __str__(self):
	    return self.text