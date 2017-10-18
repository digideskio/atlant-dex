export const baseURL = '/';
export const timeout = 30000;
export const hubURL = `${baseURL}signalr/hubs`;
export const hubName = 'mainHub';
export const notificationTimeout = 3000;
export const mobileBreakpoint = 992;

export const serverCodes = {
  '101': {
    name: 'RequestBodyIsMissing',
    type: 'error',
  },
};