from django.http import JsonResponse


def index(request):
    return JsonResponse({"res":"HELLO WORLD!"})