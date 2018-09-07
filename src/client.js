import ipc from 'node-ipc';

ipc.config = {
  ...ipc.config,
  id: 'hello',
  retry: 1000
};

ipc.connectTo('world', () => {
  ipc.of.world.on('connect', () => {
    ipc.of.world.emit('app.message', {
      message: 'hello'
    });
  });
  ipc.of.world.on('disconnect', () => {});
  ipc.of.world.on('app.message', data => {
    console.log('data', data);
  });
});
