import { useEffect, useRef, useState } from 'react'
import './App.css'

export function App() {
  const [form, setForm] = useState({})
  const [todos, setTodos] = useState([])
  const input = useRef()

  function handleChange() {
    setForm({
      ...form,
      [input.current.name]: input.current.value
    })
  }

  useEffect(() => {
    console.log(form)
  }, [form])

  function handleSubmit(event) {
    event.preventDefault()

    setTodos([
      ...todos,
      {
        name: form.todo,
        state: 'STATE.TODO'
      }
    ])

    setForm({
      ...form,
      todo: ''
    })
  }

  function handleClick(item) {
    console.log(item.name)
    const newTodos = todos.map(function(elem) {
      if(elem.name !== item.name) return elem

      return {
        ...elem,
        state: item.state === 'STATE.DONE' ? 'STATE.TODO' : 'STATE.DONE'
      }
    })

    setTodos(newTodos)
  }

  return (
    <div className="app">
      <form className='insertTask'>
        <input name="todo" ref={input} onChange={() => handleChange()} value={form.todo} placeholder="Nom de la tâche"/>
        <button className='Enregistrer' onClick={(event) => handleSubmit(event)}>Enregistrer</button>
      </form>
      <div className='lists'>
        <div className='divToDo list'>
          <h1>TO DO</h1>
          {todos.filter(function (item) {
            return item.state === 'STATE.TODO'
          }).map(function (item) {
            return (
              <div className='taskTodo' key={item}>
                <p>{item.name}</p>
                <button onClick={(item) => handleClick(item)}>DONE</button>
              </div>
            )
          })}
        </div>
        <div className='divDo list'>
          <h1>DO</h1>
          {todos.filter(function (item) {
            return item.state === 'STATE.DONE'
          }).map(function (item) {
            return (
              <div className='taskTodo' key={item}>
                <p>{item.name}</p>
                <button onClick={({item}) => handleClick(item)}>TODO</button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
