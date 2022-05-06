const express = require ('express');
const { route } = require('./Controllers/Routes/tasks');
const app = express();
const tasks = require('./Controllers/Routes/tasks');




//middleware
app.use(express.json())
//routes
app.get('/', (req,res)=>{
    res.send('Task Manager')
})

app.use('/api/v1/tasks', tasks)  
const port = 5001;
app.listen(port, console.log(`server is listening ${port}`));


//app.get('/api/v1/tasks')       -get task
//app.post('/api/v1/tasks')      -create a new task
//app.get('/api/v1/tasks/:id')   -get single task
//app.put('/api/v1/tasks/:id')   -update task
//app.delete('/api/v1/tasks')    -delete task