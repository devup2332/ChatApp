from functools import partial
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from api.models.User import User
from rest_framework_simplejwt.tokens import RefreshToken
from api.serializers.RegisterGoogleSerializer import RegisterGoogleSerializer


class LoginGoogleView (APIView):

    def post(self, request):

        print(request.data)
        user = User.objects.filter(email=request.data['email']).first()

        # Creating a new user
        if not user:
            serializer = RegisterGoogleSerializer(data=request.data)
            if not serializer.is_valid():
                return Response("Data from google is incomplete", status=status.HTTP_400_BAD_REQUEST)
            user = serializer.save()
            refresh = RefreshToken.for_user(user)
            return Response({
                "refresh": str(refresh),
                "access": str(refresh.access_token)
            }, status=status.HTTP_200_OK)

        # Login existent user
        user.status = True
        user.save()
        refresh = RefreshToken.for_user(user)

        return Response({
            "refresh": str(refresh),
            "access": str(refresh.access_token)
        }, status=status.HTTP_200_OK)
