import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as SaveIcon } from '@/assets/icons/saveIcon.svg';
import CardAuthBtn from './CardAuthBtn';
import usePatchPubs from '@/query/patch/usePatchPubs';

export default function EditingPubCard({ data, setIsEditing }) {
  console.log(data);
  const saveBtnClicked = () => {
    alert('저장되었습니다');
    patchPub({ imageUrl: image, intro: pubIntroduce, major: pubOwnerInput, menu: pubMainMenu, section: pubPageInput });
  };
  const [saveActive, setSaveActive] = useState(false);
  const [image, setImage] = useState(data.imageUrl);
  const [pubOwnerInput, setPubOwnerInput] = useState(data.major);
  const [pubPageInput, setPubPageInput] = useState(data.section);
  const [pubMainMenu, setPubMainMenu] = useState(data.menu);
  const [pubIntroduce, setPubIntroduce] = useState(data.intro);
  const { patchPub, isLoading, isSuccess, error, data: patchData } = usePatchPubs(data.id);
  const fileInput = useRef(null);
  const onChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    } else {
      //업로드 취소할 시
      setImage();
      return;
    }
    //화면에 프로필 사진 표시
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const pubOwnerChange = (e) => {
    setPubOwnerInput(e.target.value);
  };
  const pubPageChange = (e) => {
    setPubPageInput(e.target.value);
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
      (image !== data.imageUrl && image !== '') ||
      (pubOwnerInput !== data.major && pubOwnerInput !== '') ||
      (pubPageInput !== data.section && pubPageInput !== '') ||
      (pubMainMenu !== data.menu && pubMainMenu !== '') ||
      (pubIntroduce !== data.intro && pubIntroduce !== '')
    ) {
      setSaveActive(true);
      return;
    } else setSaveActive(false);
  }, [pubOwnerInput, pubPageInput, pubMainMenu, pubIntroduce]);
  return (
    <PubCardWrapper>
      <PubCardMainContent>
        <input
          type="file"
          style={{ display: 'none' }}
          accept="image/jpg,impge/png,image/jpeg"
          name="profile_img"
          onChange={onChange}
          ref={fileInput}
        />
        <PubCardImage
          alt={'수정 사진'}
          src={image}
          onClick={() => {
            fileInput.current.click();
          }}
        />
        <PubCardTextWrapper>
          <PubOwner value={pubOwnerInput} onChange={pubOwnerChange} />
          <PubPosition>
            <PubPage value={pubPageInput} onChange={pubPageChange} />
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

const PubCardImage = styled.img`
  width: 11.6rem;
  height: 8rem;
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

const PubPage = styled.input`
  padding: 0 0.4rem;
  width: 4.1rem;
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
