from django.db import models
from accounts.models import UserAccount

# Create your models here.
class Note(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(UserAccount, on_delete=models.CASCADE)

    def __str__(self):
        return self.title