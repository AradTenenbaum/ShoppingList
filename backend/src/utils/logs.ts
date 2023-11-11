import { INFO } from "./constants";
import { formatDate } from "./format";

export function logObject(details: Object, type?: string) {
  console.log({
    type: type || INFO,
    timestamp: formatDate(new Date()),
    ...details,
  });
}

export function logMessage(message: string, type?: string) {
  console.log({
    type: type || INFO,
    timestamp: formatDate(new Date()),
    message,
  });
}
