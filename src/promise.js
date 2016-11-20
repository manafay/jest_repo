class Promise {
  constructor(data) {
    this.data = data;
  }
  resolve(data) {
    return data;
  }
  reject(err) {
    throw err;
  }

}

Promise.prototype.then = func => func();


export default Promise;
const prom = new Promise();
prom.then();
