import react from 'react'
import Navbar from './navbar'
// import Todo from './todoapp'
// import Lifecycle from './lifecycle'
// import Hooks from './hooks'
import News from './news/news'
class App extends react.Component {

  render() {

    return (
      <div>

    <Navbar/>
<h1>heading</h1>
<News/>
        {/* <Hooks/> */}
        {/* <Lifecycle/> */}
        {/* <Todo/> */}
      </div>
    )
  }
}


export default App

