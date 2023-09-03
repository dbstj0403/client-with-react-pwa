import { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import CardAuthBtn from './CardAuthBtn';
import { ReactComponent as DeleteIcon } from '@/assets/icons/deleteIcon.svg';
import { ReactComponent as EditIcon } from '@/assets/icons/editIcon.svg';

export default function FoodTruckCard({ data }) {
  useEffect(() => {
    AOS.init();
  });
  const deleteBtnClicked = () => {
    alert('삭제하시겠습니까?');
  };
  const editBtnClicked = () => {
    alert('수정되었습니다');
  };
  const isAuth = true;
  const deleteBtn = [{ icon: DeleteIcon, text: '삭제', onClick: deleteBtnClicked }];
  const editBtn = [{ icon: EditIcon, text: '수정', onClick: editBtnClicked }];
  return (
    <CardWrapper isAuth={isAuth} data-aos="fade-up" data-aos-duration="800" data-aos-once>
      <BoothText>
        <BoothNumber>
          <span>{data.number}</span>
        </BoothNumber>
        <BoothName>
          <span>{data.name}</span>
        </BoothName>
        <BoothIntroduction>{data.introduce}</BoothIntroduction>
      </BoothText>
      {isAuth ? (
        <>
          <CardAuthBtn contents={deleteBtn} />
          <CardAuthBtn contents={editBtn} />
        </>
      ) : null}
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  width: 33.5rem;
  height: ${(props) => (props.isAuth ? '24.6rem' : '15.6rem')};
  margin-top: 2.4rem;
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
    ${(props) => props.theme.fontStyles.subHead1};
    line-height: 1.6rem;
    color: ${(props) => props.theme.colors.black};
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
  color: ${(props) => props.theme.colors.gray300};
  ${(props) => props.theme.fontStyles.subHead1}
  font-weight:400;
  padding: 1.2rem 0;
  border-top: 1px solid transparent;
  border-image: linear-gradient(to right, white, black);
  border-image-slice: 1;
`;

const AuthBtnWrapper = styled.div``;
