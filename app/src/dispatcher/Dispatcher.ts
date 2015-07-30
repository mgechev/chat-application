class Dispatcher {
  _callbacks: {[key: string]: Function};
  _lastID: number;
  _isDispatching: boolean;

  constructor() {
    this._callbacks = {};
    this._lastID = 1;
  }

  dispatch(payload: any) {
    Object.keys(this._callbacks).forEach((key) => {
      this._callbacks[key].call(this, payload);
    }, this);
  }

  register(callback: Function) {
    let _prefix: string = 'ID_';
    let id: string = _prefix + this._lastID++;

    this._callbacks[id] = callback;
    return id;
  }

  unregister(id: string): void {
    delete this._callbacks[id];
  }
}

export default Dispatcher;