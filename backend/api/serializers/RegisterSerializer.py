from rest_framework import serializers
from api.models.User import User

class RegisterSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = '__all__'

    def create(self,validate_data):

        #Gettind data of request
        email = validate_data['email']
        first_name = validate_data['first_name']
        last_name = validate_data['last_name']
        phone = validate_data['phone']
        password = validate_data['password']

        #Saving in DB
        user = User.objects.create_user(email,last_name,first_name,phone,password)
        print("User created")
        return user
