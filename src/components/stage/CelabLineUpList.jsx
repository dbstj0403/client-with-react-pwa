import React, { useMemo } from 'react';
import CelabLineUpItem from './CelabLineUpItem';

export default function CelabLineUpList() {
  /** 1일차 ~ 3일차 라인업
   * day: 불러올 사진의 요일
   * height: 불러올 사진의 높이
   */
  const celabLineUpSizes = useMemo(
    () => [
      {
        day: 1,
        height: '100.19rem',
      },
      {
        day: 2,
        height: '60.2rem',
      },
      {
        day: 3,
        height: '69.8rem',
      },
    ],
    []
  );

  return celabLineUpSizes.map((size) => <CelabLineUpItem key={size.day} size={size} />);
}
