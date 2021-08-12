from rest_framework_simplejwt.authentication import JWTAuthentication
from api.models.Chat import Chat
from api.models.Message import Message
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from chatProject.settings import pusher_client
from api.serializers import MessageSerializer

class NewMessage(APIView):

    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self,request):
        message = request.data['message']['message'] 
        chat = Chat.objects.filter(id=request.data['id']).first()
        message = Message.objects.create(message=message,emitter=request.user,chat=chat)
        message = MessageSerializer(message)
        chat.last_message = message.data['message']
        chat.save()

        pusher_client.trigger(f"{chat.user_1.id}--channel" ,'new-message-user',{
                "message": message.data
        })
        pusher_client.trigger(f"{chat.user_2.id}--channel",'new-message-user',{
                "message": message.data
        })
        
        return Response("Message has been send successfully")
