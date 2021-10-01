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

/**
 * First 10 digits is timestamp creation
 * @returns
 */
export function uuidv4(type: string = '00') {
  const d = Math.floor(new Date().getTime() / 1000.0);
  return `${d}-${type}-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export enum UuidTypeEnum {
  USER = '10',
  TASK = '20',
}
