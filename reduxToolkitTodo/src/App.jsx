import { useState } from 'react'
import './App.css'
import Todos from './components/Todos'
import AddTodo from './components/addTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Learn about redux toolkit</h1>
      < AddTodo />
      < Todos />
    </>
    // <Provider store={store}>
    //   <h1>Learn about redux toolkit</h1>
    //   < AddTodo />
    //   < Todos />
    // </Provider>
  )
}

export default App
