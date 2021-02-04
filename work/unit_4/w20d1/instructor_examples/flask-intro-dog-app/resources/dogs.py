import models

from flask import Blueprint, jsonify, request
from playhouse.shortcuts import model_to_dict

# first argument is blueprints name
# second argument is it's import_name
# The third argument is the url_prefix so we don't have
# to prefix all our apis with /api/v1
dogs = Blueprint('dogs', 'dogs')

@dogs.route('/', methods=["GET"])
def get_all_dogs():
    ## find the dogs and change each one to a dictionary into a new array
    try:
        breakpoint()
        dogs = [model_to_dict(dog) for dog in models.Dog.select()]
        # dogs = [{'dog': model_to_dict(models.Dog.get_by_id(user_dog.dog)), 'human': model_to_dict(models.Person.get_by_id(user_dog.user))} for user_dog in models.PersonDog.select()]
        return jsonify(data=dogs, status={"code": 200, "message": "Success"})
    except models.DoesNotExist:
        return jsonify(data={}, status={"code": 404, "message": "Error getting the resources"})

@dogs.route('/', methods=["POST"])
def create_dogs():
    ## see request payload anagolous to req.body in express
    payload = request.get_json()
    dog = models.Dog.create(**payload)
    ## see the object
    # print(dog.__dict__)
    ## Look at all the methods
    # print(dir(dog))
    # Change the model to a dict
    # print(model_to_dict(dog), 'model to dict')
    dog_dict = model_to_dict(dog)
    return jsonify(data=dog_dict, status={"code": 201, "message": "Success"})

@dogs.route('/<dog_id>', methods=["GET"])
def get_dog(dog_id):
    try:
        dog = models.Dog.get_by_id(dog_id)
        dog_dict = model_to_dict(dog)
        return jsonify(data=dog_dict, status={"code": 200, "message": "Success"})
    except models.DoesNotExist:
        return jsonify(data={}, status={"code": 404,\
                                        "message": "Error getting the resources"})

@dogs.route('/<dog_id>', methods=["PUT"])
def update_dog(dog_id):
    try:
        payload = request.get_json()
        query = models.Dog.update(**payload).where(models.Dog.id==dog_id)
        query.execute()
        updated_dog = model_to_dict(models.Dog.get_by_id(dog_id))
        return jsonify(data=updated_dog, status={"code": 200, "message": "Successfully updated"})
    except models.DoesNotExist:
        return jsonify(data={}, status={"code": 404,\
                                        "message": "Error getting the resources"})

@dogs.route('/<dog_id>', methods=["Delete"])
def delete_dog(dog_id):
    try:
        dog_to_delete = models.Dog.get_by_id(dog_id)
        dog_to_delete.delete_instance()

        # another way of deleting a dog:
        # query = models.Dog.delete().where(models.Dog.id==dog_id)
        # query.execute()

        return jsonify(data={}, status={"code": 200, "message": "Resource successfully deleted"})
    except models.DoesNotExist:
        return jsonify(data={}, status={"code": 404,\
                                        "message": "Resource does not exist"})









