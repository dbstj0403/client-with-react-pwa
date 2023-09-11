const getScrollTo = () => {
  if (window.innerWidth < 450) {
    return 1700;
  } else if (window.innerWidth < 600) {
    return 2200;
  } else {
    return 2750;
  }
};

export default getScrollTo;
