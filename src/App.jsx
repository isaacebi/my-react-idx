import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Calling component (file) - w01d01
import JSXExamples from './JSXExamples'
import PersonalInfo from './PersonalInfo'
import BrokenComponent from './BrokenComponent'

// w01d02
import FundamentalRules from './JSXFundamentalRules'
import Expression from './Expression'
import ArrayLists from './ArrayLists'
import Styling from './Styling'
import AppProps from './AppProps'
import AppLayout from './layout/AppLayout'
import AppProduct from './product/AppProduct'

// w01d03
import UserCardv1 from './userCard/variantOne'
import AppRestaurant from './restaurant/AppRestaurant'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Welcome to React!</h1>
        <p>This is my first React component</p>
        <p>Current time: {new Date().toLocaleTimeString()}</p>
      </header>
    </div>
  )
}


// Changes the according to declared component
export default AppRestaurant

