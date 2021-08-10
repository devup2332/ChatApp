from api.models.User import User
from rest_framework import serializers


class RegisterGoogleSerializer (serializers.Serializer):
    
    email = serializers.CharField(max_length=100)
    first_name = serializers.CharField(max_length=100)
    last_name = serializers.CharField(max_length=100,allow_blank=True, allow_null=True)
    avatar = serializers.CharField(max_length=200)

    def validate_last_name(self,email):
        print("LAST NAME")
        print(email)
        return email

    def validate(self,validate_data):
        print(validate_data)

        return validate_data

    def create(self,data):
        #Getting data from client
        print(data['email'])
        email = data['email']
        first_name = data['first_name']
        last_name = data['last_name']
        avatar = data['avatar'] 

        #Creating instance of google user data
        user = User.objects.create_user(email=email,first_name=first_name,last_name=last_name,phone="") 
        user.avatar = avatar
        user.status = True
        user.provider = "google"
        user.save()
        return user


