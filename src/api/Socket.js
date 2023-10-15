import io from 'socket.io-client';

class Socket {
  constructor() {
    this.socket = null;
  }

  connect(url) {
    if (!this.socket) {
      this.socket = io(url);
    }
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }

  send(payload) {
    if (this.socket) {
      console.log('payload: ', payload);
      this.socket.emit(payload.type, JSON.stringify(payload.data));
    }
  }

  on(eventName, callback) {
    if (this.socket) {
      this.socket.on(eventName, callback);
    }
  }
}

export { Socket };
