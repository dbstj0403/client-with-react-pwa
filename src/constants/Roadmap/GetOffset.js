const getOffset = (current) => {
  switch (current) {
    case 1:
      return { top: 'calc(50% - 8rem)', left: 'calc(50% - 1.2rem)', size: '2rem' };
    case 2:
      return { top: 'calc(50% + 1.5rem)', left: 'calc(50% - 7rem)', size: '2rem' };
    case 3:
      return { top: 'calc(50% - 4rem)', left: 'calc(50%)', size: '2.3rem' };
    case 4:
      return { top: 'calc(50%)', left: 'calc(50% - 3rem)', size: '2rem' };
    case 5:
      return { top: 'calc(50% + 1rem)', left: 'calc(50% + 2rem)', size: '2rem' };
    case 6:
      return { top: 'calc(50% - 4.5rem)', left: 'calc(50% - 7.8rem)', size: '2rem' };
    case 7:
      return { top: 'calc(50% - 0.7rem)', left: 'calc(50% - 14.5rem)', size: '2rem' };
    case 8:
      return { top: 'calc(50% + 1.5rem)', left: 'calc(50% + 10.7rem)', size: '2.2rem' };
  }
};

export default getOffset;
