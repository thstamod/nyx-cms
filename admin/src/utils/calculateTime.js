/* eslint-disable import/prefer-default-export */
export const calculateExpirationTime = (expToken) =>
  Date.now() + 3600 * 1000 * expToken;
