import Logo from './assets/logo.webp'
import './App.css'
import { useState } from 'react'

function App() {
  const [color, setColor] = useState('#000000');

  const handleClick = async()=>{
    const [tab] = await chrome.tabs.query({active:true});
    console.log(tab)
    chrome.scripting.executeScript({
      target:{tabId: tab.id!},
      args:[color],
      func:(color)=>{
        document.body.style.backgroundColor = color;
      }
    })
  }

  return (
    <>
      <div>
        <a target="_blank">
          <img src={Logo} className="logo react" alt="logo" />
        </a>
      </div>
      <h1>Paint Lab</h1>
      <div className="card">
        <input type='color' onChange={(e)=>setColor(e.target.value)}/>
        <h1>{color}</h1>
        <button onClick={handleClick}>
          Clicke Me
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <a href="https://github.com/muhammed-anas-na/" target='_blank'>
        GitHub
      </a>
      <a href="https://www.linkedin.com/in/anas-na-285267209/" target='_blank'>
        LinkedIn
      </a>
    </>
  )
}

export default App
