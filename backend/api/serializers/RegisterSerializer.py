from rest_framework import serializers
from api.models.User import User


class RegisterSerializer(serializers.Serializer):

    email = serializers.CharField(max_length=100)
    last_name = serializers.CharField(max_length=100)
    first_name = serializers.CharField(max_length=100)
    phone = serializers.CharField(max_length=100)
    password = serializers.CharField(max_length=100)

    def create(self, validate_data):

        # Getting information from client
        email = validate_data['email']
        first_name = validate_data['first_name']
        last_name = validate_data['last_name']
        phone = validate_data['phone']
        password = validate_data['password']

        # Creating new User
        user = User.objects.create_user(
            email, last_name, first_name, phone, password)
        user.status = True
        user.save()
        return user
