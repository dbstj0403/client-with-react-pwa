export const operatingData = [
  { operate: '수익부스', start: '10:00', end: '18:00', second: null, desc: null },
  {
    operate: '주점부스',
    start: '12:00',
    end: '17:00 체험형부스로 운영',
    second: { start: '17:00', end: '23:00 주점부스로 운영', startLabel: '낮 : ', endLabel: '밤 : ' },
    desc: null,
  },
  { operate: '푸드트럭', start: '12:00', end: '24:00', second: null, desc: '재료 소진 시 조기 마감될 수 있습니다.' },
  { operate: '와우 디제잉 페스티벌', start: '19:00', end: '24:00', second: null, desc: null },
  {
    operate: '팔찌 배부 부스',
    start: '09:00',
    end: '13:00',
    second: { start: '14:00', end: '18:00', startLabel: '1부 : ', endLabel: '2부 : ' },
    desc: null,
  },
  {
    operate: '홍익존',
    start: null,
    end: null,
    second: null,
    desc: null,
    first: '16:30 시팅존 입장',
    second: '17:00 스탠딩존 입장',
  },
];
