from api.models.User import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework_simplejwt.authentication import JWTAuthentication
from api.serializers import UserSerializer


class GetUserLogged(APIView):

    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = User.objects.filter(email=request.user.email).first()
        
        serializer = UserSerializer(user)

        return Response(serializer.data, status=status.HTTP_200_OK)
