import models

from flask import Blueprint, jsonify, request
from playhouse.shortcuts import model_to_dict
from flask_login import current_user

user_dogs = Blueprint("user_dogs", "user_dogs")

@user_dogs.route('/', methods=["POST"])
def create_dog():
    # create the dog w/ payload info if current_user exists
    if current_user.id:
        payload = request.get_json()
        print("@@@@@@@@@@@@@@@")
        print(payload)
        dog = models.Dog.create(**payload)
        dog_dict = model_to_dict(dog)

        # breakpoint()

        # Python 2 debugger:
        # import pdb
        # pdb.set_trace()

        # create the relationship b/w dog and user
        user_dog_data = {
            "user": current_user.id,
            "dog": dog.id
        }
        models.PersonDog.create(**user_dog_data)
        return jsonify(data=dog_dict, status={"code": 201, "message": "Success"})
