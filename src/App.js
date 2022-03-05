//  *Hooks
import { useState } from 'react'
// * Components
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  // * To create state we need to define the name of the statr property and then a method name, 
  // * this is what eventually we will need to pass to re set the state

  const [showAddTasks, setShowAddTasks] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 0.24849551567348604,
      text: 'MOTOSHU',
      day: 1646430870888,
      reminder: false
    },
    {
      id: 0.248495515673483604,
      text: 'CERBERUS',
      day: 1646430870888,
      reminder: false
    },
    {
      id: 0.2484955156734338604,
      text: 'ATLAS',
      day: 1646430870888,
      reminder: false
    },
    {
      id: 0.248495351567348604,
      text: 'GILGAMESH',
      day: 1646430870888,
      reminder: false
    }
  ]);

  //  ? Add a tasks
  const addTask = (task) => {
    const id = Math.floot(Math.random() * 10000);
    const newTask = { id, ...task };
    setTasks([...tasks, newTask])
  }


  //  ? Delete a tasks
  const deleteTasks = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //  ? TO
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }

  return (
    // * In the return method tyou can just return one parent element
    <div className="container">
      <Header onAdd={() => setShowAddTasks(!showAddTasks)} />
      {<AddTask onAdd={addTask} /> && showAddTasks}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTasks} onToggle={toggleReminder} />) : ('No tasks to show.')}

    </div>
  );
}




export default App;

