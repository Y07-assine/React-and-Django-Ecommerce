from django.db import models
from django.contrib.auth.models import User
from django.shortcuts import reverse
from django.conf import settings
from ckeditor.fields import RichTextField

# Create your models here.
class Category(models.Model):
    title = models.CharField(max_length=100)

    def __str__(self):
        return self.title

class Brand(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Product(models.Model):
    title = models.CharField(max_length=100)
    price = models.FloatField()
    discount_price = models.FloatField(blank=True,null=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE)
    slug= models.SlugField()
    description = models.TextField()
    image = models.ImageField()
    details = RichTextField(null = True)
    useCase = models.TextField(null=True)
    fiche_tec = models.ImageField(null = True)
    
    def __str__(self):
        return self.title
    
    def get_absolute_url(self):
        return reverse("core:product", kwargs={"slug": self.slug})

    def get_add_to_cart_url(self):
        return reverse("core:add-to-cart", kwargs={"slug": self.slug})

    def get_remove_from_cart_url(self):
        return reverse("core:remove-from-cart", kwargs={"slug": self.slug})

    def get_amount_saved(self):
        if self.discount_price :
            return self.price - self.discount_price
        return 0

    def get_stock(self):
        productflavor = ProductFlavor.objects.filter(product = self)
        total = 0
        for product in productflavor :
            total += product.quantity
        return total

class Flavor(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name
    
class ProductFlavor(models.Model):
    flavor = models.ForeignKey(Flavor, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField(default = 0)

    class Meta:
        unique_together = (
            ('product','flavor')
        )

    def __str__(self):
        return self.product.title