const express = require("express")
const app = express()
const mongoose = require("mongoose")

//This project's in base path create a .env file. And create a variable DB_CONNECT that your mongodb database's connect's url in the file.
mongoose.connect(process.env.DB_CONNECT);

const TodoModel = mongoose.model("todo", { text: String })

app.get("/get-all", (req, res) => {

  TodoModel.find({}, (err, data) => {
    res.status(200).json({
      todoList: data
    })
  })

})

app.post("/save", (req, res) => {
  const newTodoItem = new TodoModel({
    text: req.body.todoText
  });
  newTodoItem.save()
    .then(response => {
      res.status(200).json({
        todo: response
      })
    })
})
app.put("/update", (req, res) => {

  let updatedTodo = req.body.todo;
  TodoModel.findOneAndUpdate({ _id: updatedTodo._id}, {text: updatedTodo.text},() => {
    res.status(200).json({
      message: "The to-do updated!"
    });
  })

})
app.delete("/delete", (req, res) => {

  let todo = req.body.todo;
  TodoModel.findOneAndRemove({ _id: todo._id},()=>{
    res.status(204).json({});
  })

})

module.exports = {
  path: "/api",
  handler: app
}

