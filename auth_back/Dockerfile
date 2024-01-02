FROM python:3.8

# Instala netcat
RUN apt-get update && apt-get install -y netcat-openbsd

# Continúa con el resto de tus instrucciones de Dockerfile...
WORKDIR /app

COPY requirements.txt /app/
RUN pip install -r requirements.txt
# RUN python manage.py migrate

COPY . /app/

EXPOSE 8000

# Copia el entrypoint.sh
COPY entrypoint.sh /entrypoint.sh

# Ejecuta el script al iniciar el contenedor
ENTRYPOINT ["/entrypoint.sh"]
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
