import uuid
from django.db import models
# Create your models here.
class Products(models.Model):
    id = models.CharField(max_length=15, primary_key=True)
    name = models.CharField(max_length=100)
    price = models.FloatField()
    sale_price = models.FloatField(null=True, blank=True)
    category = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return str(self.name)
    def save(self, *args, **kwargs):
        if not self.id:
            self.id = str(uuid.uuid4()).replace('-', '').upper()[:15]
        super().save(*args, **kwargs)