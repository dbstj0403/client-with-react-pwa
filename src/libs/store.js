import { atom } from 'recoil';

export const sideState = atom({
  key: 'sideState',
  default: false,
});

export const pageState = atom({
  key: 'pageState',
  default: '',
});

export const lineupState = atom({
  key: 'lineupState',
  default: false,
});

export const roadmapState = atom({
  key: 'roadmapState',
  default: 0,
});
