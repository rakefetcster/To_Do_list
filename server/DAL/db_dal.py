from pymongo import MongoClient
from bson import ObjectId

class TodoDBDal:
    def __init__(self):
        self.__client = MongoClient(port=27017)
        self.__db = self.__client["todo"]
        self.__collection_todo = self.__db["todo_list"]

    def get_all_data(self):
      result_list = list()
      try:
          result_list = list(self.__collection_todo.find({}))
          return result_list
      except Exception as e:
          return [{"Error":"An error occurred - Access to db was not possible"}]

    def add_todo(self, obj):
      try:
        self.__collection_todo.insert_one(obj)
        return [{"Success":"created with id: {}".format(str(obj["_id"]))}]
      except Exception as e:
        return [{"Error":"An error occurred - Failed to save task "}]
    
    
    def update_todo(self, id,obj):
      try:
          print(obj)
          self.__collection_todo.update_one({"_id": ObjectId(id)},{"$set":obj})
          return [{"Success":"The todo has been updated"}]
      except Exception as e:
          return [{"Error":"An error occurred -The update failed" }]

    def delete_item_todo(self):
      try:
          self.__collection_todo.delete_many({})
          return [{"Success":"todo deleted" }]
      except Exception as e:
          return [{"Error":"An error occurred - the todo item was not deleted" }]

   