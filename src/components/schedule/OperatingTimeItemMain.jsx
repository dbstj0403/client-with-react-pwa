import theme from '@/styles/theme';
import styled from 'styled-components';

function OperatingTimeItemMain() {
  return (
    <OperatingBox>
      <Number>{1}</Number>
      <OperatingTitle>{`메인무대 운영시간`}</OperatingTitle>
      <OperatingTime>
        {`수: 18:00 ~ 각 일별 종료시간
목: 17:00 ~ 각 일별 종료시간
금: 17:00 ~ 각 일별 종료시간`}
      </OperatingTime>
    </OperatingBox>
  );
}

export default OperatingTimeItemMain;

const OperatingBox = styled.div`
  position: relative;
  z-index: 2;
  padding: 2.4rem 2.8rem 2.4rem 2rem;
  background: ${theme.colors.black13};
  backdrop-filter: blur(0.6rem);

  &:nth-child(even) {
    background: ${theme.colors.black19};
  }
`;

const Number = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2.4rem;
  height: 2.4rem;
  border-radius: 4rem;
  background-color: ${theme.colors.white200};

  color: ${theme.colors.black};
  ${theme.fontStyles.subHead4};
`;

const OperatingTitle = styled.div`
  margin: 0.6rem 0 0.8rem 0;
  color: ${theme.colors.white};
  ${theme.fontStyles.head5};
`;

const OperatingTime = styled.div`
  padding: 0.8rem 0;
  border-top: 0.1rem solid ${theme.colors.gray800};
  color: ${theme.colors.gray200};
  ${theme.fontStyles.subHead3};

  white-space: pre-line;
`;
