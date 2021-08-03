from django.utils.regex_helper import contains
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from api.models.User import User
from chatProject import settings
from chatProject.settings import pusher_client
from rest_framework_simplejwt.authentication import JWTAuthentication
from chatProject.custom_storage import MediaStorage
import os
import uuid


class ImageUploadView(APIView):

    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        # Get the image
        image = request.FILES['image']

        # Generating uuid
        id = str(uuid.uuid4())

        # Separete file name and extension
        filename, ext = os.path.splitext(image.name)
        image.name = id+ext
        user = User.objects.filter(email=request.user).first()
        media_storage = MediaStorage()

        #Seeting the path inside de space
        path_within_bucket = os.path.join('images', image.name)
        media_storage.save(path_within_bucket, image)
        url_dgo,signature = media_storage.url(path_within_bucket).split('?')

        # Validating if photo is the photo default or no
        if user.avatar == os.getenv('DEFAULT_PHOTO_USER'):
            user.avatar = url_dgo
            user.save()
            pusher_client.trigger('channel_chat', 'photo-updated-user', {
                "message": "Photo updated successfully"
            })
            return Response({
                "message": "Photo updated successfully"
            })

        # Removing last photo

        if str(user.provider) != "google":
            media_storage.delete("images/" + str(user.avatar).split('/images/images/')[1])

        user.avatar = url_dgo
        user.save()
        pusher_client.trigger('channel_chat', 'photo-updated-user', {
            "message": "Photo updated successfully"
        })
        return Response({
            "message": "Photo updated successfully"
        })
