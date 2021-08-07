from django.views.generic import View
from django.shortcuts import render

class RenderTemplateView(View):

    def get(self,request,*args,**kwwargs):
        return render(request,'index.html',{})
