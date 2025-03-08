import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../styles/globals.css'
import Todo from '../todo/todoList'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Todo/>
  </StrictMode>,
)
