import { useState } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}
export function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  function addTask(taskTitle: string) {
    const newTask = {
      id: crypto.randomUUID(),
      title: taskTitle,
      isCompleted: false
    }
    setTasks([...tasks, newTask]);
  }
  function deleteTask(taskId: string) {
    const filteredTask = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTask);
  }

  function handleTaskClick(taskId: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    })
    setTasks(newTasks);
  }

  return (
    <div>
      <Header onAddTask={addTask} />
      <Tasks tasks={tasks} onDelete={deleteTask} onCompleted={handleTaskClick} />
    </div>
  )
}


