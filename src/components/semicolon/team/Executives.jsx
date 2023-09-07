import theme from '@/styles/theme';
import styled from 'styled-components';
import { SemicolonMember } from '../SemicolonMember';

export function Executives() {
  return (
    <TeamInst>
      <HeadTitle>집행위원회</HeadTitle>
      <Spacing height={0.8} />
      <BodyText>
        총학생회의 최고 집행기구로,
        <br />
        총학생회장단의 통할 하에 총학생회 집행위원회의
        <br />
        활동에 필요한 모든 사업 진행을 총괄합니다.
      </BodyText>
      <Spacing height={6} />
      <SemicolonMember name={'이준화'} major={'건축학부 20'} inst={'집행위원장'} />
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

const Spacing = styled.div`
  height: ${(props) => `${props.height}` + 'rem'};
`;

const BodyText = styled.div`
  padding-top: 1.6rem;
  color: #a4a4a4;
  ${theme.fontStyles.body1};
  text-align: center;
`;
