
// @NOTE babel-polyfill needs to be declared in order need for babel-preset-env to polyfill
import 'babel-polyfill';
import { map } from 'lodash';

export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const addMap = (arr) => map(arr, add);
