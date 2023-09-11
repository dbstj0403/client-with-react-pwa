import EditBtn from '@/components/common/btn/EditBtn';
import usePostPromotionBooths from '@/query/post/usePostPromotionBooths';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

AddPromotionBoothCard.propTypes = {
  closeForm: PropTypes.func,
};

/**
 * @param {func} closeForm: 삭제 버튼 누르면 카드 추가 form 사라짐
 */
export default function AddPromotionBoothCard({ closeForm }) {
  /** 프로모션 부스 추가 리퀘스트 */
  const [request, setRequest] = useState({
    booth_num: '',
    name: '',
    introduction: '',
  });

  /** 모든 정보가 채워졌는지 확인하는 state */
  const [requireFulfilled, setRequireFulfilled] = useState(false);

  /** 카드 추가 관련 useMutation hook */
  const { addPromotionBooth, isError } = usePostPromotionBooths();

  const onChange = (e) => {
    const { name, value } = e.target;
    setRequest((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /** 카드 저장 버튼 */
  const onSaveCard = () => {
    addPromotionBooth(request);
    closeForm();
  };

  useEffect(() => {
    /** 모든 input 채워졌는지 확인 */
    let flag = true;
    for (const key in request) {
      const element = request[key];
      if ('' === element) flag = false;
    }
    setRequireFulfilled(() => flag);
  }, [request]);

  useEffect(() => {
    if (isError) alert('카드 추가 실패! 관리자에게 연락주세요');
  }, [isError]);

  return (
    <CardWrapper data-aos="fade-up" data-aos-duration="800">
      <BoothText>
        <BoothNumber>
          <input
            type="text"
            name={'booth_num'}
            value={request.booth_num}
            placeholder="위치 번호"
            maxLength={2}
            onChange={onChange}
          />
        </BoothNumber>
        <BoothName>
          <input
            type="text"
            name={'name'}
            value={request.name}
            placeholder="부스 이름"
            maxLength={40}
            onChange={onChange}
          />
        </BoothName>
        <BoothIntroduction>
          <textarea
            type="text"
            name={'introduction'}
            value={request.introduction}
            placeholder="30자 이내 설명"
            maxLength={30}
            onChange={onChange}
          />
        </BoothIntroduction>
        <EditBtn title={'저장'} type={'add'} onClick={onSaveCard} disabled={!requireFulfilled} />
        <EditBtn title={'삭제'} type={'delete'} onClick={closeForm} />
      </BoothText>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  width: 33.5rem;
  margin-bottom: 3.6rem;

  background-color: #000;

  input,
  textarea {
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

  button {
    margin-bottom: 0.8rem;
  }

  button:last-child {
    margin-bottom: 0;
  }

  background: rgba(29, 29, 29, 0.6);
  backdrop-filter: blur(6px);
`;

const BoothText = styled.div`
  padding: 1.8rem 2rem;
`;

const BoothNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.8rem;

  input,
  input::placeholder {
    ${({ theme }) => theme.fontStyles.subHead4};
  }
`;

const BoothName = styled.div`
  margin-bottom: 0.8rem;
  input,
  input::placeholder {
    ${({ theme }) => theme.fontStyles.head5}
  }

  span {
    color: ${(props) => props.theme.colors.green};
    ${(props) => props.theme.fontStyles.head5};
  }
`;

const BoothIntroduction = styled.p`
  textarea,
  textarea::placeholder {
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
