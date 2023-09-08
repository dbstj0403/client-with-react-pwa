import React from 'react';
import styled from 'styled-components';

export default function EditingPromotionBoothCard() {
  return (
    <CardWrapper data-aos="fade-up" data-aos-duration="800">
      <BoothText>
        <BoothNumber>
          <input type="text" placeholder="번호" maxLength={3} />
        </BoothNumber>
        <BoothName>
          <input type="text" placeholder="부스 이름" maxLength={40} />
        </BoothName>

        <BoothHosted>
          <input type="text" placeholder="부스 호스트" maxLength={40} />
        </BoothHosted>
        <BoothIntroduction>
          <input type="text" placeholder="30자 이내 설명" maxLength={30} />
        </BoothIntroduction>
      </BoothText>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  width: 33.5rem;
  height: 20.4rem;

  margin-bottom: 3.6rem;

  background-color: #000;

  input {
    background: none;
    border: none;
    outline: none;

    color: ${({ theme }) => theme.colors.white};

    width: 100%;
    height: 100%;
  }

  input::placeholder {
    color: ${({ theme }) => theme.colors.gray400};
  }

  background: rgba(54, 54, 54, 0.6);
  backdrop-filter: blur(6px);
`;

const BoothText = styled.div`
  padding: 1.8rem 2rem;
`;

const BoothNumber = styled.div`
  border: 1px solid pink;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.8rem;

  input,
  input::placeholder {
    ${({ theme }) => theme.fontStyles.subHead4}
  }
`;

const BoothName = styled.div`
  border: 1px solid pink;
  margin-bottom: 0.8rem;
  input,
  input::placeholder {
    ${({ theme }) => theme.fontStyles.subHead3}
  }
`;

const BoothHosted = styled.div`
  margin-bottom: 0.8rem;
  border: 1px solid pink;
  input,
  input::placeholder {
    ${({ theme }) => theme.fontStyles.subHead3}
  }
`;

const BoothIntroduction = styled.p`
  input,
  input::placeholder {
    ${({ theme }) => theme.fontStyles.subHead4}
  }
  color: rgba(255, 255, 255, 0.8);
  ${(props) => props.theme.fontStyles.subHead1}
  font-weight:400;
  padding: 1.2rem 0;
  border-top: 1px solid transparent;
  border-image: linear-gradient(to right, white, black);
  border-image-slice: 1;
`;
