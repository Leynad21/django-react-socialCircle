# Generated by Django 4.2.3 on 2023-07-04 18:06

from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion
import django_countries.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="Profile",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "about_me",
                    models.TextField(
                        default="say something about yourself", verbose_name="About me"
                    ),
                ),
                (
                    "colour",
                    models.CharField(
                        default="What is your favourite color?",
                        max_length=50,
                        verbose_name="Colour",
                    ),
                ),
                (
                    "animal",
                    models.CharField(
                        default="If you were an animal what animal would you like to be?",
                        max_length=50,
                        verbose_name="Animal",
                    ),
                ),
                (
                    "profile_photo",
                    models.ImageField(
                        default="/profile_default.png",
                        upload_to="",
                        verbose_name="Profile Photo",
                    ),
                ),
                (
                    "gender",
                    models.CharField(
                        choices=[
                            ("Male", "Male"),
                            ("Female", "Female"),
                            ("Rabbit", "Rabbit"),
                            ("Fridge", "Fridge"),
                            ("Other", "Other"),
                        ],
                        default="Other",
                        max_length=20,
                        verbose_name="Gender",
                    ),
                ),
                (
                    "country",
                    django_countries.fields.CountryField(
                        default="PT", max_length=2, verbose_name="Country"
                    ),
                ),
                (
                    "city",
                    models.CharField(
                        default="Lagos", max_length=80, verbose_name="City"
                    ),
                ),
                (
                    "num_reviews",
                    models.IntegerField(
                        blank=True,
                        default=0,
                        null=True,
                        verbose_name="Number of Reviews",
                    ),
                ),
                (
                    "user",
                    models.OneToOneField(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="profile",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Review",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("content", models.TextField()),
                (
                    "rating",
                    models.PositiveIntegerField(
                        validators=[
                            django.core.validators.MinValueValidator(0),
                            django.core.validators.MaxValueValidator(5),
                        ]
                    ),
                ),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                (
                    "reviewed_user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="received_reviews",
                        to="profiles.profile",
                    ),
                ),
                (
                    "reviewer",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="given_reviews",
                        to="profiles.profile",
                    ),
                ),
            ],
        ),
    ]