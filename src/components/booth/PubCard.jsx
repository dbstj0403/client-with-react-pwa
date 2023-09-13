import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import { ReactComponent as DeleteIcon } from '@/assets/icons/deleteIcon.svg';
import { ReactComponent as EditIcon } from '@/assets/icons/editIcon.svg';
import { ReactComponent as SaveIcon } from '@/assets/icons/saveIcon.svg';
import CardAuthBtn from './CardAuthBtn';
import EditingPubCard from './EditingPubCard';
import { adminState } from '@/libs/store';
import { useRecoilValue } from 'recoil';
import useDeletePubs from '@/query/delete/useDeletePubs';

export default function PubCard({ data }) {
  useEffect(() => {
    AOS.init();
  });
  const [isEditing, setIsEditing] = useState(false);
  const isAdmin = useRecoilValue(adminState);
  const { deletePub, isLoading, isSuccess, error, data: deleteData } = useDeletePubs(data.id);
  const deleteBtnClicked = () => {
    const confirmation = confirm('삭제하시겠습니까?');
    if (confirmation) {
      deletePub();
    }
  };
  const editBtnClicked = () => {
    setIsEditing(true);
  };
  const deleteAndEdit = [
    {
      icon: DeleteIcon,
      text: '삭제',
      active: true,
      onClick: deleteBtnClicked,
    },
    {
      icon: EditIcon,
      text: '수정',
      active: true,
      onClick: editBtnClicked,
    },
  ];
  return isEditing ? (
    <EditingPubCard data={data} setIsEditing={setIsEditing} />
  ) : (
    <PubCardWrapper
      data-aos={data.section === 'A' ? 'flip-left' : data.section === 'B' ? 'flip-right' : 'flip-up'}
      data-aos-duration="1500"
      data-aos-once
    >
      <PubCardMainContent>
        <PubCardImage image={data.imageUrl ? data.imageUrl : '/img/skeleton1.png'}>
          {data.section === 'A' ? <PubCardFold1 /> : data.section === 'B' ? <PubCardFold2 /> : <PubCardFold3 />}
        </PubCardImage>
        <PubCardTextWrapper>
          <PubOwner>{data.major} 부스</PubOwner>
          <PubPosition>
            <PubPage page_section={data.section}>
              <span>Page {data.section}</span>
            </PubPage>
          </PubPosition>
          <PubMainMenu>{data.menu}</PubMainMenu>
          <PubIntroduce>{data.intro}</PubIntroduce>
        </PubCardTextWrapper>
      </PubCardMainContent>
      {isAdmin ? <CardAuthBtn contents={deleteAndEdit} /> : null}
    </PubCardWrapper>
  );
}

const PubCardWrapper = styled.div`
  padding: 2.4rem 0;
  height: 18.2rem;
  display: flex;
  flex-direction: column;
`;

const PubCardMainContent = styled.div`
  display: flex;
`;

const PubCardImage = styled.div`
  width: 11.6rem;
  height: 8rem;
  background-image: url(${(props) => props.image});
  background-size: cover;
  position: relative;
`;

const PubCardFold1 = styled.div`
  width: 0px;
  height: 0px;
  border-top: 3.6rem solid ${(props) => props.theme.colors.green};
  border-left: 0px solid transparent;
  border-right: 3.6rem solid ${(props) => props.theme.colors.background};
  position: absolute;
  right: 0;
  bottom: 0;
`;

const PubCardFold2 = styled.div`
  width: 0px;
  height: 0px;
  border-right: 3.6rem solid ${(props) => props.theme.colors.pink};
  border-left: 0px solid transparent;
  border-top: 3.6rem solid ${(props) => props.theme.colors.background};
`;

const PubCardFold3 = styled.div`
  width: 0px;
  height: 0px;
  border-bottom: 3.6rem solid ${(props) => props.theme.colors.purple};
  border-left: 0px solid transparent;
  border-right: 3.6rem solid ${(props) => props.theme.colors.background};
  position: absolute;
  right: 0;
`;

const PubCardTextWrapper = styled.div`
  display: flex;
  margin-left: 1.2rem;
  flex-direction: column;
  width: 19.5rem;
`;

const PubOwner = styled.span`
  ${(props) => props.theme.fontStyles.subHead1}
`;

const PubPosition = styled.div`
  display: flex;
  align-items: center;
  > span {
    ${(props) => props.theme.fontStyles.body3}
    font-weight:400;
  }
  div {
    margin-right: 0.4rem;
  }
`;

const PubPage = styled.div`
  span {
    color: ${(props) =>
      props.page_section === 'A'
        ? props.theme.colors.green
        : props.page_section === 'B'
        ? props.theme.colors.pink
        : props.theme.colors.purple};
    ${(props) => props.theme.fontStyles.body3}
    font-weight:400;
  }
  padding: 0 0.4rem;
  border-radius: 0.2rem;
  background-color: ${(props) =>
    props.page_section === 'A' ? '#42CF6133' : props.page_section === 'B' ? '#FF89D733' : '#D291F033'};
`;

const DevideCircle = styled.div`
  width: 0.2rem;
  height: 0.2rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.white};
`;

const PubMainMenu = styled.div`
  ${(props) => props.theme.fontStyles.body3}
  font-weight:400;
  color: ${(props) => props.theme.colors.gray300};
`;

const PubIntroduce = styled.p`
  ${(props) => props.theme.fontStyles.body5}
  color: ${(props) => props.theme.colors.gray400};
`;
