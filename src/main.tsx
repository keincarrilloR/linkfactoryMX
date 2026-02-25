import ReactDOM from 'react-dom/client'
import App from './App'
import { SocketProvider } from './context/SocketContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  /*
    Envuelve la aplicacion con el proveedor
    para que toda la aplicacion tenga acceso al contexto del socket
  */
  <SocketProvider>
    <App />
  </SocketProvider>
)
