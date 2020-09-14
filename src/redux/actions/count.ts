import { typedAction } from '../typed';

export type CountState = {
  count: number;
};

export const countInitState: CountState = {
  count: 0,
};

export const increase = () => {
  return typedAction('INCREASE');
};

export const decrease = () => {
  return typedAction('DECREASE');
};

export type CountAction = ReturnType<typeof increase | typeof decrease>;
