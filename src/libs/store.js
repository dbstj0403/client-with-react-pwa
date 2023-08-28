import { atom } from 'recoil';

export const sideState = atom({
  key: 'sideState',
  default: false,
});

export const pageState = atom({
  key: 'pageState',
  default: '',
});
