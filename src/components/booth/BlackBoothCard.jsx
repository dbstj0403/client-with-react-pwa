import { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';

export default function BlackBoothCard({ data }) {
  useEffect(() => {
    AOS.init();
  });
  return (
    <CardWrapper data-aos="fade-up" data-aos-duration="800">
      <BoothCardImage alt={'부스 이미지'} src={data.image} />
      <BoothText>
        <BoothNumber>
          <span>{data.number}</span>
        </BoothNumber>
        <BoothName>
          <span>{data.name}</span>
        </BoothName>
        <BoothIntroduction>{data.introduce}</BoothIntroduction>
      </BoothText>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  background-color: #000;
  width: 33.5rem;
  height: 38.8rem;
  margin-top: 3.2rem;
`;

const BoothCardImage = styled.img`
  height: 18.4rem;
  width: 100%;
`;

const BoothText = styled.div`
  padding: 1.8rem 2rem;
`;

const BoothNumber = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.8rem;
  span {
    ${(props) => props.theme.fontStyles.subHead1}
    line-height: 1.6rem;
  }
`;

const BoothName = styled.div`
  margin-bottom: 0.8rem;
  span {
    color: ${(props) => props.theme.colors.white};
    ${(props) => props.theme.fontStyles.head5}
  }
`;

const BoothIntroduction = styled.p`
  color: rgba(255, 255, 255, 0.8);
  ${(props) => props.theme.fontStyles.subHead1}
  font-weight:400;
  padding: 1.2rem 0;
  border-top: 1px solid transparent;
  border-image: linear-gradient(to right, white, black);
  border-image-slice: 1;
`;
