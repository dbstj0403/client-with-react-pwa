import theme from '@/styles/theme';
import styled from 'styled-components';
import { Member } from '../Member';

export function Design() {
  return (
    <TeamInst>
      <HeadTitle>디자인</HeadTitle>
      <Spacing height={0.8} />
      <BodyText>내용을 채우겠습니다!</BodyText>
      <Spacing height={6} />
      <Member
        profileimg={''}
        name={'윤여진'}
        major={'시각디자인학과 18'}
        inst={'여기까지가 20자입니다 여러분 여기까'}
      />
    </TeamInst>
  );
}

const TeamInst = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeadTitle = styled.div`
  ${theme.fontStyles.head3};
`;

const BodyText = styled.div`
  padding-top: 1.6rem;
  color: #a4a4a4;
  ${theme.fontStyles.body1};
  text-align: center;
`;

const Spacing = styled.div`
  height: ${(props) => `${props.height}` + 'rem'};
`;
