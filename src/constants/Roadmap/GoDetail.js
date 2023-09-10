const goDetail = (current, action) => {
  switch (current) {
    case 1:
      action('booth/profit');
      break;
    case 2:
      action('stage');
      break;
    case 3:
      action('entrance');
      break;
    case 4:
      action('hongikzone');
      break;
    case 5:
      action('booth/pub');
      break;
    case 6:
      action('booth/foodtruck');
      break;
    case 7:
      action('facilities');
      break;
    case 8:
      action('wowdjfestival');
      break;
  }
};

export default goDetail;
