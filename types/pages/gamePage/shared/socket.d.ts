declare function Socket(): void
declare class Socket {
  _socket: any
  listners: {}
  _disconnected: boolean
  _attempReconect: boolean
  setup(): void
  addListerner(command: any, listner: any): void
  removeListener(command: any, listner: any): void
  sendCommand(content: any, responseHandler: any): void
  closeConnection(): void
}
declare var socket: Socket
//# sourceMappingURL=socket.d.ts.map
