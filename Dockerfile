FROM    python:3.10-slim

ENV     PYTHONUNBUFFERED 1

ENV     PATH="/home/user/.local/bin:${PATH}"


COPY    ./app/requirements.txt /requirements.txt
RUN     pip install --upgrade pip && pip install -r /requirements.txt

RUN     mkdir /app
WORKDIR /app
COPY    ./app /app

RUN     useradd -ms /bin/bash user &&  \
        chown -R user:root /app

COPY    --chown=user:root [ "app/", "/opt/app" ]

USER    user
WORKDIR /opt/app

EXPOSE  8080

CMD python manage.py runserver 0.0.0.0:8080