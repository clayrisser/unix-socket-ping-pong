import ipc from 'node-ipc';

ipc.config = {
  ...ipc.config,
  id: 'server',
  retry: 1000
};

ipc.serve(() => {
  ipc.server.on('ping', (data, socket) => {
    setTimeout(() => {
      ipc.server.emit(socket, 'ping', { message: 'pong' });
    }, 1000);
  });
});

ipc.server.start();
