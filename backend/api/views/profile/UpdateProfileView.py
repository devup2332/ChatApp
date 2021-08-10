from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from api.models.User import User
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated

class UpdateProfileView (APIView):

    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self,request):
        User.objects.filter(email=request.user).update(**request.data)
        return Response("User updated from backend",status=status.HTTP_200_OK)
