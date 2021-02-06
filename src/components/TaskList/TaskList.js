import React, { useState } from "react";
import PropTypes from "prop-types";
import TaskItem from '../TaskItem/TaskItem'
import "./tasklist.css";

export default function TaskList({ title, onAddTask, tasks, onUpdateTask, onDeleteTask }) {

  const addTask = () => {
    onAddTask('Nova Tarefa', title)
  }

  return (
    <div className="tasklist">
      <span className="titlte">{title}</span>
      <div className="content">
        {
          tasks.map((task) => {
            return <TaskItem 
            key={task.id} 
            id={task.id} 
            title={task.title} 
            status={task.status}
            onUpdateTask={onUpdateTask}
            onDeleteTask={onDeleteTask} />
          })
        }
      </div>
      <button onClick={addTask}>Adicionar Tarefa</button>
    </div>
  );
}

TaskList.propTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired
};
