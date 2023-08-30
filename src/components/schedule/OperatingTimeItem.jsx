import theme from '@/styles/theme';
import styled from 'styled-components';

function OperatingTimeItem(props) {
  return (
    <OperatingBox>
      <Number>1</Number>
      <OperatingTitle>메인무대 운영시간</OperatingTitle>
      <OperatingTime>18:00 ~ 24:00</OperatingTime>
    </OperatingBox>
  );
}

export default OperatingTimeItem;

const OperatingBox = styled.div`
  padding: 2.4rem 2.8rem 2.4rem 2rem;
  background: ${theme.colors.black13};
  backdrop-filter: blur(0.6rem);

  &:nth-child(even) {
    background: ${theme.colors.black19};
  }
`;

// typeface guide에 없어서 임시로 line height 설정
const Number = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2.4rem;
  height: 2.4rem;
  border-radius: 4rem;
  background-color: ${theme.colors.white200};

  color: ${theme.colors.black};
  ${theme.fontStyles.subHead1};
  line-height: 1.6rem;
`;

const OperatingTitle = styled.div`
  margin: 0.6rem 0 0.8rem 0;
  color: ${theme.colors.white};
  ${theme.fontStyles.head5};
`;

// typeface guide에 없어서 임시로 body2로 설정
const OperatingTime = styled.div`
  padding: 0.8rem 0;
  border-top: 0.1rem solid ${theme.colors.gray800};
  color: ${theme.colors.gray200};
  ${theme.fontStyles.body2};
`;
