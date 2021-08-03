from api.models.User import User
from rest_framework import serializers


class UpdateUserSerializer (serializers.Serializer):
    class Meta:
        model = User
        fields = '__all__'

    def validate(self, validate_data):
        print("Validating")
        return validate_data
