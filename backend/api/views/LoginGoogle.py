from rest_framework.authentication import SessionAuthentication
from rest_framework.response import Response
from rest_framework.views import APIView
from chatProject.settings import pusher_client
from allauth.socialaccount.models import SocialAccount
from api.models.User import User
from rest_framework_simplejwt.tokens import RefreshToken

class LoginGoogleView (APIView):

    authentication_classes = [SessionAuthentication]

    def get(self, request):

        user_social = SocialAccount.objects.filter(user=request.user).first()
        
        user = User.objects.filter(email=request.user).first()
        
        print(user.provider)
        if user.provider=="form":
            user.provider = 'google'
            user.avatar = user_social.extra_data['picture']
            user.save()
            refresh = RefreshToken.for_user(user)
            pusher_client.trigger('channel_chat', 'login-google', {
                "refresh": str(refresh),
                "access": str(refresh.access_token)
            })
            return Response("")
        refresh = RefreshToken.for_user(user)
        pusher_client.trigger('channel_chat', 'login-google', {
            "refresh": str(refresh),
            "access": str(refresh.access_token)
        })
        return Response("")
