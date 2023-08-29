import styled from 'styled-components';

export const DrawerIcon = () => {
  return (
    <IconWrapper>
      <svg width="2.0rem" height="1.8rem" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.118 3.1998H18.118C18.4363 3.1998 18.7415 3.07338 18.9665 2.84833C19.1916 2.62329 19.318 2.31806 19.318 1.9998C19.318 1.68154 19.1916 1.37632 18.9665 1.15128C18.7415 0.926233 18.4363 0.799805 18.118 0.799805H2.118C1.79974 0.799805 1.49451 0.926233 1.26947 1.15128C1.04443 1.37632 0.917999 1.68154 0.917999 1.9998C0.917999 2.31806 1.04443 2.62329 1.26947 2.84833C1.49451 3.07338 1.79974 3.1998 2.118 3.1998ZM18.118 7.7998H2.118C1.79974 7.7998 1.49451 7.92623 1.26947 8.15128C1.04443 8.37632 0.917999 8.68154 0.917999 8.9998C0.917999 9.31806 1.04443 9.62329 1.26947 9.84833C1.49451 10.0734 1.79974 10.1998 2.118 10.1998H18.118C18.4363 10.1998 18.7415 10.0734 18.9665 9.84833C19.1916 9.62329 19.318 9.31806 19.318 8.9998C19.318 8.68154 19.1916 8.37632 18.9665 8.15128C18.7415 7.92623 18.4363 7.7998 18.118 7.7998ZM18.118 14.7998H2.118C1.96041 14.7998 1.80437 14.8308 1.65878 14.8911C1.51319 14.9515 1.3809 15.0398 1.26947 15.1513C1.15804 15.2627 1.06965 15.395 1.00934 15.5406C0.949038 15.6862 0.917999 15.8422 0.917999 15.9998C0.917999 16.1574 0.949038 16.3134 1.00934 16.459C1.06965 16.6046 1.15804 16.7369 1.26947 16.8483C1.3809 16.9598 1.51319 17.0482 1.65878 17.1085C1.80437 17.1688 1.96041 17.1998 2.118 17.1998H18.118C18.2756 17.1998 18.4316 17.1688 18.5772 17.1085C18.7228 17.0482 18.8551 16.9598 18.9665 16.8483C19.078 16.7369 19.1663 16.6046 19.2267 16.459C19.287 16.3134 19.318 16.1574 19.318 15.9998C19.318 15.8422 19.287 15.6862 19.2267 15.5406C19.1663 15.395 19.078 15.2627 18.9665 15.1513C18.8551 15.0398 18.7228 14.9515 18.5772 14.8911C18.4316 14.8308 18.2756 14.7998 18.118 14.7998Z"
          fill="black"
        />
      </svg>
    </IconWrapper>
  );
};

const IconWrapper = styled.div`
  cursor: pointer;
`;
