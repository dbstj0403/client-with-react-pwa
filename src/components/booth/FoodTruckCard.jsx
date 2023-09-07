import { useEffect, useState } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import CardAuthBtn from './CardAuthBtn';
import { ReactComponent as DeleteIcon } from '@/assets/icons/deleteIcon.svg';
import { ReactComponent as EditIcon } from '@/assets/icons/editIcon.svg';
import EdittingFoodTruckCard from './EdittingFoodTruckCard';

export default function FoodTruckCard({ data }) {
  useEffect(() => {
    AOS.init();
  });
  const [editting, setEditting] = useState(false);
  const deleteBtnClicked = () => {
    alert('삭제하시겠습니까?');
  };
  const editBtnClicked = () => {
    setEditting(true);
  };
  const isAuth = false;
  const deleteBtn = [{ icon: DeleteIcon, text: '삭제', active: true, onClick: deleteBtnClicked }];
  const editBtn = [{ icon: EditIcon, text: '수정', active: true, onClick: editBtnClicked }];
  return editting ? (
    <EdittingFoodTruckCard data={data} />
  ) : (
    <CardWrapper isAuth={isAuth} data-aos="fade-up" data-aos-duration="800" data-aos-once>
      <BoothText>
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
  background: ${(props) => props.theme.colors.background};
  backdrop-filter: blur(6px);
  width: 100%;
  height: ${(props) => (props.isAuth ? '24.6rem' : '15.6rem')};
  margin-top: 2.4rem;
`;

const BoothText = styled.div`
  padding: 1.8rem 2rem;
`;

const BoothName = styled.div`
  margin-bottom: 0.8rem;
  span {
    color: ${(props) => props.theme.colors.green};
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
