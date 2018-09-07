import ipc from 'node-ipc';

ipc.config = {
  ...ipc.config,
  id: 'world',
  retry: 1500
};

ipc.serve(() => {
  ipc.server.on('app.message', (data, socket) => {
    console.log('data', data);
    ipc.server.emit(socket, 'app.message', { message: 'ping back' });
  });
});

ipc.server.start();
