import React from 'react'
import Greet from './components/Greet'
import ReactDOM from 'react-dom'


function App() {
  return (
    <div>
      <Greet />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById("root"))


export default App;
