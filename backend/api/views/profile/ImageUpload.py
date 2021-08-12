from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from api.models.User import User
from chatProject.settings import pusher_client
from rest_framework_simplejwt.authentication import JWTAuthentication
import cloudinary
import cloudinary.uploader
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

        #Seeting the path inside de space
        response = cloudinary.uploader.upload(image,folder="Chat-app/avatars/",resource_type = "image")

        # Validating if photo is the photo default or no
        if user.avatar == os.getenv('DEFAULT_PHOTO_USER'):
            user.avatar = response["secure_url"]
            user.save()
            pusher_client.trigger('channel_chat', 'photo-updated-user', {
                "message": "Photo updated successfully"
            })
            return Response({
                "message": "Photo updated successfully"
            })

        user.avatar = response["secure_url"]
        user.save()
        pusher_client.trigger(f"{request.user.id}--channel", 'photo-updated-user', {
            "message": "Photo updated successfully"
        })

        return Response({
            "message": "Photo updated successfully"
        })
