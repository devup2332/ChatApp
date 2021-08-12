from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from chatProject.settings import pusher_client


class LogOutView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def delete(self,request):
        user = request.user
        user.status = False
        user.save()
        pusher_client.trigger(f"{user.id}--channel",'logout-user',{
                "message": "User is logout"
        })
        return Response({
            "message": "User logout successfully"
            },status=status.HTTP_200_OK)
