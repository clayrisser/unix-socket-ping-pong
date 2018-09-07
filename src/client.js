import ipc from 'node-ipc';

ipc.config = {
  ...ipc.config,
  id: 'client',
  retry: 1000
};

ipc.connectTo('server', () => {
  ipc.of.server.on('connect', () => {
    ipc.of.server.emit('ping', {
      message: 'ping'
    });
  });
  ipc.of.server.on('disconnect', () => {});
  ipc.of.server.on('ping', () => {
    setTimeout(() => {
      ipc.of.server.emit('ping', {
        message: 'ping'
      });
    }, 1000);
  });
});
