const socketMolino1MX = new WebSocket(import.meta.env.SOCKET || 'ws://')

socketMolino1MX.onopen = () => {
  console.log('Conexión establecida con Molino 1 - MX')
}

socketMolino1MX.onmessage = event => {
  console.log('Mensaje recibido de Molino 1 - MX:', event.data)
}

export { socketMolino1MX }
