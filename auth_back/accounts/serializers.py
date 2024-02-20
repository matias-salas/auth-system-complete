from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.serializers import TokenVerifySerializer, TokenObtainPairSerializer
from rest_framework_simplejwt.state import token_backend
from rest_framework import serializers

User = get_user_model()

class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id', 'email', 'password')


class CustomTokenVerifySerializer(TokenVerifySerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        # Aquí puedes decodificar el token y obtener la información que necesitas
        token = attrs['token']
        decoded_data = token_backend.decode(token, verify=True)

        # Por ejemplo, obtener el username del usuario
        user_id = decoded_data['user_id']
        # Aquí debes buscar el usuario en tu modelo de usuario y obtener el nombre
        user = User.objects.get(id=user_id)
        id = user.id

        # Agregar el nombre al response
        data['id'] = id  # Reemplaza esto con la variable name
        # data['code'] = 'token_valid'
        # data['detail'] = 'Token is valid'

        return data


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Agregar información personalizada al payload
        token['username'] = user.username

        return token
