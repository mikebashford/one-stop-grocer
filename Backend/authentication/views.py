# Create your views here.
import json
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.decorators.http import require_POST

@require_POST
def login_view(request):
    data = json.loads(request.body)
    email = data.get('email')
    password = data.get('password')
    user = authenticate(request, email=email, password=password)
    if user is not None:
        login(request, user)
        return JsonResponse({'success': True})
    else:
        return JsonResponse({'success': False})
    return JsonResponse({"details": "Successfully logged in!"})
def logout_view(request):
    if not request.user.is_authenticated:
        return JsonResponse({'success': False})
    else:
        logout(request)
        return JsonResponse({'success': True})
    
@ensure_csrf_cookie
def session_view(request):
    if request.user.is_authenticated:
        return JsonResponse({'isAuthenticated': True})
    else:
        return JsonResponse({'isAuthenticated': False})
    
def whoami_view(request):
    if request.user.is_authenticated:
        return JsonResponse({'success': True, 'email': request.user.email})
    else:
        return JsonResponse({'isAuthenticated': False})