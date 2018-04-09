import io from 'socket.io-client';

const socket = io(location.href);
socket.on('connect', (socket) => {
  console.log('coneccted!');
});

const listenEvents = [
  'tap',
  'press',
  'swipeleft',
  'swiperight', 
  'swipeup', 
  'swipedown', 
];

window.onload = () => {
  const myElement = document.getElementById('app');
  const mc = new Hammer(myElement);
  
  // listen to events...
  mc.on(listenEvents.join(' '), (ev) => {
    myElement.textContent = `${ev.type} gesture detected.`;
    switch (ev.type) {
      case 'swipeleft':
        socket.emit('message', 'right');
        break;

      case 'swiperight':
        socket.emit('message', 'left');
        break;

      case 'tap':
        socket.emit('message', 'down');
        break;

      case 'press':
        socket.emit('message', 'up');
        break;
    
      default:
        break;
    }
  });
}
