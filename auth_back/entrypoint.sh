#!/bin/sh

# Esperar a que la base de datos esté lista
while ! nc -z db 3306; do
  sleep 0.1
done

# echo "Deleting all users..."
# python manage.py shell -c "from accounts.models import UserAccount; UserAccount.objects.all().delete()"

echo "Applying database migrations..."
python manage.py makemigrations
python manage.py migrate

echo "Checking for existing superuser..."
SUPERUSER_EMAIL=${DJANGO_SUPERUSER_EMAIL:-"admin@example.com"}
SUPERUSER_USERNAME=${DJANGO_SUPERUSER_USERNAME:-"admin"}
SUPERUSER_PASSWORD=${DJANGO_SUPERUSER_PASSWORD:-"1234"}

# Asegúrate de modificar la referencia a tu modelo de usuario personalizado
if ! python manage.py shell -c "from accounts.models import UserAccount; print(UserAccount.objects.filter(email='$SUPERUSER_EMAIL').exists())" | grep 'True'; then
    echo "Creating superuser..."
    python manage.py shell -c "from accounts.models import UserAccount; UserAccount.objects.create_superuser('$SUPERUSER_EMAIL', '$SUPERUSER_USERNAME', '$SUPERUSER_PASSWORD')"
fi

# Actualizar los detalles del sitio en la base de datos usando Django shell
echo "Updating site details in database..."
python manage.py shell -c "from django.contrib.sites.models import Site; Site.objects.filter(id=1).update(domain='localhost:3232', name='localhost:3232')"

exec "$@"
