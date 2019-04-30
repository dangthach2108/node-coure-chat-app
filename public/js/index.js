var socket = io();

socket.on('connect', () => {
  console.log('Connected to server')

  socket.emit('createMessage', {
    to: 'client@example.com',
    text: 'Hey. This is Jensen'
  })
})

socket.on('disconnect', () => {
  console.log('Disconnected from server')
})

socket.on('newMessage', function (message) {
  console.log('New message', message)
})