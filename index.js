const express = require("express");
const app = express();


let todo = [{
  task:"Go to Gym",
  description:"Got to gym at 2 pm daily",
  complete: false,
  id:1,
}]


  app.get('/todo',(req,res)=> {     // jab bho /todo route par get request aayegi, initially jab yeh search hoga too by default hi get request send ho jayegi 
      res.send(todo);
  })

  app.post('/todo',(req,res)=> { 
// jab /todo par post request aayegi ko jo bhi existing todo hoga usme new todo add kr denge,
// humne example ke liye hardcoded todo liya hai but in actuall scenerio hum new todo ko input lete hain and use as an request parameter backend ko send krte hain
    const newtodo = {
      task:"Complete Homework till 3pm",
      description:"Both dsa and web-dev assignments ",
      complete: false,
      id: 2,
    };

    todo.push(newtodo); 
    res.send(todo);
  })

  app.put("/todo", (req, res) => {
    // same post request method ki trah in case pur request aati hai to hum use particular id wale todo ko update kr denge 

    const id = 2; 
    const newDescription = "Hey there, I have been changed"; 
  
    const todoItem = todo.find((item) => item.id === id);   // find function will run through the complete todo and search for the first todoitem with same id mentioned
  
    if (todoItem) {
      todoItem.description = newDescription;
      res.send(todo); // Return the updated todo
    } else {
      res.status(404).send({ error: "Todo not found" }); // in case todo is not found we will send a json to the frontend and a status code of 404 means there is something wrong from the side of client
    }
  });
  

app.listen(3000);