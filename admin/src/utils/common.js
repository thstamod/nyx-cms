// eslint-disable-next-line import/prefer-default-export
export const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);
