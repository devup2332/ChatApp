from api.models.User import User
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.authentication import JWTAuthentication


class ValidateEmailProfile (APIView):

    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        user = User.objects.filter(email=request.data['email']).first()
        
        if not user: 
            return Response({
                "status": True,
                "message": "dsadasdas"
                })
        return Response({
            "status": False,
            "message": "User free to use"
        })
