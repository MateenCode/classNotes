from peewee import *
from flask_login import UserMixin

import datetime

DATABASE = PostgresqlDatabase('dogs_app', host='localhost', port=5432)

class Person(UserMixin, Model):
    username = CharField(unique=True)
    email = CharField(unique=True)
    password = CharField()

    class Meta:
        database = DATABASE

class Dog(Model):
    name = CharField()
    owner = CharField()
    breed = CharField()
    created_at = DateTimeField(default=datetime.datetime.now)

    class Meta:
        database = DATABASE

class UserDog(Model):
    user = ForeignKeyField(Person, backref='pets')
    dog = ForeignKeyField(Dog, backref='human')

    class Meta:
        database = DATABASE

def initialize():
    DATABASE.connect()
    DATABASE.create_tables([Dog, Person, UserDog], safe=True)
    print("TABLES Created")
    DATABASE.close()