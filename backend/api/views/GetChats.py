from api.serializers.ChatSerializer import ChatSerilizer
from api.models.Chat import Chat
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication

class GetChatsView (APIView):

    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self,request):
        user = request.user
        chats = Chat.objects.filter(user_1=user) | Chat.objects.filter(user_2=user)
        chats = ChatSerilizer(chats,many=True)
        return Response(chats.data)


