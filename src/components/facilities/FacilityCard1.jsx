import styled from 'styled-components';

export default function FacilityCard1({ data }) {
  return (
    <FacilityCardWrapper>
      <CardTitle>
        <span>{data.title}</span>
      </CardTitle>
      <CardDetail>
        <span>{data.detail}</span>
      </CardDetail>
    </FacilityCardWrapper>
  );
}

const FacilityCardWrapper = styled.div`
  padding: 1.8rem 2rem;
`;

const CardTitle = styled.div`
  padding-bottom: 0.8rem;
  border-bottom: 1px solid #e3e3e3;
  span {
    ${(props) => props.theme.fontStyles.head4}
  }
`;

const CardDetail = styled.div`
  padding: 0.8rem 0;
  span {
    ${(props) => props.theme.fontStyles.subHead1}
    font-weight: 400;
  }
`;
