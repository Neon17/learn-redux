import './App.css'
import { UsersList } from './features/users/UsersList'
import { UsersShow } from './features/users/UsersShow'

function App() {
  return (
    <>
      <div className="btn p-0 m-0">
        Hello
      </div>
      <div className="p-3">
        <UsersList />
      </div>
      <div className="m-3 p-3">
        <UsersShow />
      </div>
    </>
  )
}

export default App
