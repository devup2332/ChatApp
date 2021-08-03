from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status
from api.serializers.RegisterSerializer import RegisterSerializer

class RegisterView (APIView):

    def post(self,request):
        serializer = RegisterSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        data = serializer.save() 
        token = RefreshToken.for_user(data)
        token = {
                  "refresh": str(token),
                  "access": str(token.access_token)
              }
              
        return Response({
                "message": "User Created",
                "token": token,
              },status=status.HTTP_200_OK)
