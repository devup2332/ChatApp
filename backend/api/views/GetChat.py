from rest_framework_simplejwt.tokens import AccessToken
from api.models.Message import Message
from api.serializers.ChatSerializer import ChatSerilizer
from api.models.Chat import Chat
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated


class GetChatView(APIView):


    def get(self,request,id):
        chat = Chat.objects.filter(id=id).first();
        messages = Message.objects.filter(chat=chat)
        chat.messages.set(messages)
        data = ChatSerilizer(chat)
        return Response(data.data)
