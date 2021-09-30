import { environment } from 'src/environments/environment';

export function simulateTimeResponse(fn: Function) {
  if (environment.mock.enabled) {
    setTimeout(() => {
      fn();
    }, environment.mock.timeout);
  } else {
    fn();
  }
}

export function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
