import './App.css'
import React, {useState} from 'react'
import Navbar from './components/Navbar/Navbar'
import TaskList from './components/TaskList/TaskList'

let idAcc = 0

const generateId = () => idAcc = idAcc + 1

function App() {

  const [tasks, setTasks] = useState([])

  const addTask = (title, status) => {
    const newTask = {
      id: generateId(),
      title: title,
      status: status
    }

    setTasks((value) => [...value, newTask])
  }

  const onUpdateTask = (id, title, status) => {
    setTasks((v) => {
      return v.map((i) => {
        if (i.id === id) {
          return {...i, title, status}
        } else {
          return i
        }
      })
    })
  }

  const deleteTask = (id) => {
    setTasks((v) => {
      return v.filter((i) => i.id !== id)
    })
  }

  return (
    <div className="App">

      <Navbar />

      <div className="container">
        <TaskList title="Pendente" onAddTask={addTask} tasks={tasks.filter((v) => v.status === "Pendente")} onUpdateTask={onUpdateTask} onDeleteTask={deleteTask}/>
        <TaskList title="Fazendo" onAddTask={addTask} tasks={tasks.filter((v) => v.status === "Fazendo")} onUpdateTask={onUpdateTask} onDeleteTask={deleteTask}/>
        <TaskList title="Feito" onAddTask={addTask} tasks={tasks.filter((v) => v.status === "Feito")} onUpdateTask={onUpdateTask} onDeleteTask={deleteTask}/>
      </div>

    </div>
  );
}

export default App;
