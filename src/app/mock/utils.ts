import { environment } from "src/environments/environment";

export function simulateTimeResponse(fn: Function) {
  if (environment.mock.enabled) {
    setTimeout(() => {
      fn();
    }, environment.mock.timeout);
  } else {
    fn();
  }
}
