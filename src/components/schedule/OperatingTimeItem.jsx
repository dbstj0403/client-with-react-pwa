import theme from '@/styles/theme';
import styled from 'styled-components';

function OperatingTimeItem({ number, data }) {
  return (
    <OperatingBox>
      <Number>{number}</Number>
      <OperatingTitle>{`${data.operate} 운영시간`}</OperatingTitle>
      {data.second === null ? (
        <OperatingTime>
          {`${data.start} ~ ${data.end}`}
          {data.desc !== null ? <Desc>{`\n${data.desc}`}</Desc> : null}
        </OperatingTime>
      ) : (
        <OperatingTimeSecond>
          <Order first={1}>{`1차: `} </Order>
          {`${data.start} ~ ${data.end}\n`}
          <Order first={0}>{`2차: `} </Order>
          {`${data.second.start} ~ ${data.second.end}\n`}
        </OperatingTimeSecond>
      )}
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

const Desc = styled.span`
  color: ${theme.colors.pink};
  ${theme.fontStyles.subHead3};
`;

const OperatingTimeSecond = styled.div`
  padding: 0.8rem 0;
  border-top: 0.1rem solid ${theme.colors.gray800};
  color: ${theme.colors.gray200};
  ${theme.fontStyles.subHead3};

  white-space: pre-line;
`;

const Order = styled.span`
  color: ${(props) => (props.first ? theme.colors.pink : theme.colors.green)};
  ${theme.fontStyles.subHead3};
`;
