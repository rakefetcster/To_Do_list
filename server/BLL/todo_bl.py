from DAL.db_dal import TodoDBDal

class TodoBL:
  def __init__(self):
      self.__todo_db_dal=TodoDBDal()

  def get_all_todes(self):
    todo_from_db = self.__todo_db_dal.get_all_data()
    return(todo_from_db)

  def add_todes(self,obj):
    self.deletet_All_todo()
    for item in obj:
        result = self.__todo_db_dal.add_todo(item)
    return(result)

 
  def deletet_All_todo(self):
    result = self.__todo_db_dal.delete_item_todo()
    return(result)

