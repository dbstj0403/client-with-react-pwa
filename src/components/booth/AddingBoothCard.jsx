import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CardAuthBtn from './CardAuthBtn';
import { ReactComponent as SaveIcon } from '@/assets/icons/saveIcon.svg';

export default function AddingBoothCard() {
  const saveBtnClicked = () => {
    alert('저장되었습니다');
  };
  const [saveActive, setSaveActive] = useState(false);
  const [pubOwnerInput, setPubOwnerInput] = useState('');
  const [pubPageInput, setPubPageInput] = useState('');
  const [pubPositionNum, setPubPositionNum] = useState('');
  const [pubMainMenu, setPubMainMenu] = useState('');
  const [pubIntroduce, setPubIntroduce] = useState('');
  const pubOwnerChange = (e) => {
    setPubOwnerInput(e.target.value);
  };
  const pubPageChange = (e) => {
    setPubPageInput(e.target.value);
  };
  const pubPositionChange = (e) => {
    setPubPositionNum(e.target.value);
  };
  const pubMainMenuChange = (e) => {
    setPubMainMenu(e.target.value);
  };
  const pubIntroduceChange = (e) => {
    setPubIntroduce(e.target.value);
  };
  useEffect(() => {
    if (
      pubOwnerInput !== '' &&
      pubPageInput !== '' &&
      pubPositionNum !== '' &&
      pubMainMenu !== '' &&
      pubIntroduce !== ''
    ) {
      setSaveActive(true);
      return;
    } else setSaveActive(false);
  }, [pubOwnerInput, pubPageInput, pubPositionNum, pubMainMenu, pubIntroduce]);
  const save = [
    {
      icon: SaveIcon,
      text: '저장',
      active: saveActive,
      onClick: saveBtnClicked,
    },
  ];
  return (
    <PubCardWrapper>
      <PubCardMainContent>
        <PubCardImage></PubCardImage>
        <PubCardTextWrapper>
          <PubOwner placeholder="부스 이름" onChange={pubOwnerChange} />
          <PubPosition>
            <PubPage placeholder="page" onChange={pubPageChange} />
            <DevideCircle />
            <PositionNum placeholder="position" onChange={pubPositionChange} />
          </PubPosition>
          <PubMainMenu placeholder="메인 메뉴" onChange={pubMainMenuChange} />
          <PubIntroduce placeholder="30자 이내 소개" maxLength={30} onChange={pubIntroduceChange} />
        </PubCardTextWrapper>
      </PubCardMainContent>
      <CardAuthBtn contents={save} />
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

const PubCardTextWrapper = styled.div`
  display: flex;
  margin-left: 1.2rem;
  flex-direction: column;
  width: 19.5rem;
`;

const PubOwner = styled.input`
  ${(props) => props.theme.fontStyles.subHead1}
  color:${(props) => props.theme.colors.white};
  background-color: transparent;
  border: none;
  margin-bottom: 0.7rem;
`;

const PubPosition = styled.div`
  display: flex;
  align-items: center;
`;

const PubPage = styled.input`
  padding: 0 0.4rem;
  width: 4.1rem;
  border-radius: 0.2rem;
  color: ${(props) => props.theme.colors.white};
  background-color: transparent;
  border: none;
  ${(props) => props.theme.fontStyles.body4}
`;

const DevideCircle = styled.div`
  width: 0.2rem;
  height: 0.2rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.white};
  margin: 0 0.5rem;
`;

const PositionNum = styled.input`
  padding: 0 0.4rem;
  width: 7.1rem;
  border-radius: 0.2rem;
  color: ${(props) => props.theme.colors.white};
  background-color: transparent;
  border: none;
  ${(props) => props.theme.fontStyles.body4}
`;

const PubMainMenu = styled.input`
  ${(props) => props.theme.fontStyles.body3}
  font-weight:400;
  color: ${(props) => props.theme.colors.white};
  margin: 0.7rem 0;
  background-color: transparent;
  border: none;
`;

const PubIntroduce = styled.textarea`
  ${(props) => props.theme.fontStyles.body5}
  color: ${(props) => props.theme.colors.white};
  background-color: transparent;
  border: none;
`;
