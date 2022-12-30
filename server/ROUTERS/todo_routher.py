from flask import Blueprint,jsonify, request, make_response
from BLL.todo_bl import TodoBL
todo_bl = TodoBL()
todo = Blueprint('todoList', __name__)

#getAll
@todo.route("/", methods=['GET'])
def get_all_todo():
  todo_list = todo_bl.get_all_todes()
  return jsonify(todo_list)

@todo.route("/", methods=['POST'])
def add_todo():
  obj = request.json
  result = todo_bl.add_todes(obj)
  return jsonify(result)

