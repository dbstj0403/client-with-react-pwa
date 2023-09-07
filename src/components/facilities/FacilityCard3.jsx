import React from 'react';
import styled from 'styled-components';

export default function FacilityCard3() {
  return (
    <>
      <FacilityCardWrapper>
        <CardTitle>
          <span>교내 약국 운영 시간</span>
        </CardTitle>
        <CardDetail>
          <p>제2기숙사(X)동 지하 1층</p>
          <p>08:30 ~ 23:00</p>
        </CardDetail>
      </FacilityCardWrapper>
      <FacilityCardWrapper>
        <CardTitle>
          <span>비상시 응급 치료</span>
        </CardTitle>
        <CardDetail>
          <span>학생회관 1층(G동)</span>
          <span>에서 응급치료를 받으실 수 있습니다.</span>
        </CardDetail>
      </FacilityCardWrapper>
    </>
  );
}

const FacilityCardWrapper = styled.div`
  padding: 1.8rem 2rem;
`;

const CardTitle = styled.div`
  padding-bottom: 0.8rem;
  ${(props) => `border-bottom: 1px solid ${props.theme.colors.gray800}`};
  span {
    ${(props) => props.theme.fontStyles.head4}
  }
`;

const CardDetail = styled.div`
  padding: 0.8rem 0;

  span:first-child {
    color: #ff89d7;
  }
  span {
    color: ${(props) => props.theme.colors.gray300};
    ${(props) => props.theme.fontStyles.subHead3};
  }

  p {
    ${(props) => props.theme.fontStyles.subHead1}
    font-weight: 400;
    color: #ff89d7;
  }
`;
