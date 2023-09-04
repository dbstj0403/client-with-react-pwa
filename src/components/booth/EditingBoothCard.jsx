import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as SaveIcon } from '@/assets/icons/saveIcon.svg';
import CardAuthBtn from './CardAuthBtn';

export default function EditingBoothCard({ data, setIsEditing }) {
  const saveBtnClicked = () => {
    alert('저장되었습니다');
    setIsEditing(false);
  };
  const [saveActive, setSaveActive] = useState(false);
  const [pubOwnerInput, setPubOwnerInput] = useState(data.owns);
  const [pubPositionNum, setPubPositionNum] = useState(data.position);
  const [pubMainMenu, setPubMainMenu] = useState(data.mainMenu);
  const [pubIntroduce, setPubIntroduce] = useState(data.introduction);
  const pubOwnerChange = (e) => {
    setPubOwnerInput(e.target.value);
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
  const save = [
    {
      icon: SaveIcon,
      text: '저장',
      active: saveActive,
      onClick: saveBtnClicked,
    },
  ];
  useEffect(() => {
    if (
      pubOwnerInput !== data.owns ||
      pubPositionNum !== data.position ||
      pubMainMenu !== data.mainMenu ||
      pubIntroduce !== data.introduction
    ) {
      setSaveActive(true);
      return;
    } else setSaveActive(false);
  }, [pubOwnerInput, pubPositionNum, pubMainMenu, pubIntroduce]);
  return (
    <PubCardWrapper>
      <PubCardMainContent>
        <PubCardImage image={data.image} />
        <PubCardTextWrapper>
          <PubOwner value={pubOwnerInput} onChange={pubOwnerChange} />
          <PubPosition>
            <PubPage isPageOne={data.page === 1}>
              <span>Page {data.page}</span>
            </PubPage>
            <DevideCircle />
            <PositionNum value={pubPositionNum} onChange={pubPositionChange} />
          </PubPosition>
          <PubMainMenu value={pubMainMenu} onChange={pubMainMenuChange} />
          <PubIntroduce value={pubIntroduce} onChange={pubIntroduceChange} />
        </PubCardTextWrapper>
      </PubCardMainContent>
      <CardAuthBtn contents={save} />
    </PubCardWrapper>
  );
}

const PubCardWrapper = styled.div`
  padding: 2.4rem 0;
  height: 21.2rem;
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
    color: ${(props) => (props.isPageOne ? props.theme.colors.green : '#FF89D7')};
    ${(props) => props.theme.fontStyles.body3}
    font-weight:400;
  }
  padding: 0 0.4rem;
  border-radius: 0.2rem;
  background-color: ${(props) => (props.isPageOne ? 'rgba(66, 207, 97, 0.20)' : 'rgba(255, 137, 215, 0.20)')};
`;

const DevideCircle = styled.div`
  width: 0.2rem;
  height: 0.2rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.white};
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
