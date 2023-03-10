import { useRef, useState } from 'react'
import './App.css'

export function App() {
  const [form, setForm] = useState({})
  const [todos, setTodos] = useState([])
  const input = useRef()

  function handleChange() {
    setForm({
      ...form,
      [input.name]: input.value
    })
    console.log(form)
  }

  function handleSubmit(event) {
    event.preventDefault()

    setTodos([
      ...todos,
      {
        name: form.todo,
        state: STATE.TODO
      }
    ])

    setForm({
      ...form,
      todo: ''
    })
  }

  function handleClick(item) {
    const newTodos = todos.map(function(elem) {
      if(elem.name !== item.name) return elem

      return {
        ...elem,
        state: item.state === STATE.DONE ? STATE.TODO : STATE.DONE
      }
    })

    setTodos(newTodos)
  }

  return (
    <div className="app">
      <form className='insertTask'>
        <input name="todo" ref={input} onChange={() => handleChange()} value={form.todo} placeholder="Saississez le nom de la tâche..."/>
        <button className='Enregistrer' onClick={(event) => handleSubmit(event)}>Enregistrer</button>
      </form>
      <div className='lists'>
        <div className='divToDo'>
          <h1>TO DO</h1>
          <ul>
            {todos.filter(function (item) {
              return item.state === STATE.TODO
            }).map(function (item) {
              return (
                  <li key={item}></li>
              )
            })}
          </ul>
        </div>
        <div className='divDo'>
          <h1>DO</h1>
        </div>
      </div>
    </div>
  )
}

export default App
