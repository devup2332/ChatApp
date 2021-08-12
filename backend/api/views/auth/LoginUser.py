from api.serializers.LoginSerializer import LoginSerializer
from api.models.User import User
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from chatProject.settings import pusher_client

class LoginView(APIView):

    def post(self,request):
        serializer = LoginSerializer(data=request.data)
        
        if serializer.is_valid():
            user = request.user
            user.status = True
            user.save()
            token = RefreshToken.for_user(user)
            pusher_client.trigger(f"{user.id}--channel",'login-user',{
                "message": "user logged now",
            })
            res = {
                "refresh": str(token),
                "access": str(token.access_token)
            }
            return Response(res)
        

        return Response(serializer.errors)
