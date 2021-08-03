from rest_framework.response import Response
from rest_framework.views import APIView
import boto3
import os

class Testing (APIView):

    def post(self,request):
        file = request.data['image']
        session = boto3.session.Session()
        client = session.client('s3',
                        region_name='sfo3',
                        endpoint_url=os.getenv('AWS_S3_ENDPOINT_URL'),
                        aws_access_key_id=os.getenv('AWS_ACCESS_KEY_ID'),
                        aws_secret_access_key=os.getenv('AWS_SECRET_ACCESS_KEY'))
        client.upload_file(Key=file,Bucket=os.getenv('AWS_STORAGE_BUCKET_NAME'),Filename=file)
        return Response("Photo Uploaded")

