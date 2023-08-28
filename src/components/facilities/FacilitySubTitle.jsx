import styled from 'styled-components';
import { ReactComponent as MedicalIcon } from '@/assets/icons/medicalIcon.svg';
import { ReactComponent as RestRoomIcon } from '@/assets/icons/restroomIcon.svg';
import { ReactComponent as CigarIcon } from '@/assets/icons/cigarIcon.svg';
import { ReactComponent as StudentCouncilIcon } from '@/assets/icons/studentCouncilIcon.svg';

export default function FacilitySubTitle({ categoryState }) {
  return (
    <SubTitleWrapper>
      <FacilityIcon>
        <span>
          {categoryState === 0 ? (
            <RestRoomIcon />
          ) : categoryState === 1 ? (
            <CigarIcon />
          ) : categoryState === 2 ? (
            <MedicalIcon />
          ) : categoryState === 3 ? (
            <StudentCouncilIcon />
          ) : null}
        </span>
      </FacilityIcon>
      <SubTitle>
        <span>
          {categoryState === 0
            ? '주요 화장실 위치'
            : categoryState === 1
            ? '흡연부스'
            : categoryState === 2
            ? '의료 시설 안내'
            : categoryState === 3
            ? '총학부스'
            : null}
        </span>
      </SubTitle>
    </SubTitleWrapper>
  );
}

const SubTitleWrapper = styled.div`
  padding: 0 1.8rem;
  width: 100%;
  margin-bottom: 1.2rem;
`;

const FacilityIcon = styled.div`
  margin-bottom: 0.5rem;
`;

const SubTitle = styled.div`
  span {
    ${(props) => props.theme.fontStyles.subTitle}
    line-height:3.8rem
  }
`;
