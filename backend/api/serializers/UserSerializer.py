from rest_framework import serializers
from api.models.User import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['avatar', 'id', 'provider', 'phone',
                  'email', 'last_name', 'first_name', 'status']

