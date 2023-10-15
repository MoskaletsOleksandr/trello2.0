export const socketMiddleware = (socket) => (params) => (next) => (action) => {
  const { dispatch, getState } = params;
  const { type, payload } = action;

  switch (type) {
    case 'socket/connect':
      socket.connect('http://localhost:5000');

      // Додайте обробник для події "loginSuccess"
      socket.on('loginSuccess', (data) => {
        const payload = JSON.parse(data);

        // Диспетчеризуйте дію для обробки успішної автентифікації
        dispatch({ type: 'auth/loginSuccess', payload });
      });

      // Додайте обробник для події "loginError"
      socket.on('loginError', (data) => {
        const payload = JSON.parse(data);

        // Диспетчеризуйте дію для обробки помилки автентифікації
        dispatch({ type: 'auth/loginError', payload });
      });

      socket.on('open', () => {});
      socket.on('message', (data) => {});
      socket.on('close', () => {});
      break;

    case 'socket/disconnect':
      socket.disconnect();
      break;

    case 'socket/send':
      console.log('payload:', payload);
      socket.send(payload);
      break;

    default:
      break;
  }

  return next(action);
};
