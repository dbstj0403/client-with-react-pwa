import styled from 'styled-components';
import CardAuthBtn from './CardAuthBtn';
import { ReactComponent as SaveIcon } from '@/assets/icons/saveIcon.svg';
import { ReactComponent as EditIcon } from '@/assets/icons/editIcon.svg';
import { useEffect, useState } from 'react';

export default function EdittingFoodTruckCard({ data }) {
  const [boothName, setBoothName] = useState(data.name);
  const [boothIntroduction, setBoothIntroduction] = useState(data.introduce);
  const [active, setActive] = useState(false);
  const saveBtnClicked = () => {
    alert('저장되었습니다?');
  };
  const deleteBtnClicked = () => {
    alert('삭제하시겠습니까');
  };
  const boothNameChanged = (e) => {
    setBoothName(e.target.value);
  };
  const boothIntroductionChanged = (e) => {
    setBoothIntroduction(e.target.value);
  };
  useEffect(() => {
    if (boothName !== data.name || boothIntroduction !== data.introduce) {
      setActive(true);
    } else setActive(false);
  }, [boothName, boothIntroduction]);
  const isAuth = true;
  const saveBtn = [{ icon: SaveIcon, text: '저장', active, onClick: saveBtnClicked }];
  const deleteBtn = [{ icon: EditIcon, text: '삭제', active: true, onClick: deleteBtnClicked }];
  return (
    <CardWrapper>
      <BoothText>
        <BoothNumber>
          <span>{data.number}</span>
        </BoothNumber>
        <BoothName value={boothName} onChange={boothNameChanged} />
        <BoothIntroduction value={boothIntroduction} onChange={boothIntroductionChanged} maxLength={30} />
      </BoothText>
      {isAuth ? (
        <>
          <CardAuthBtn contents={saveBtn} />
          <CardAuthBtn contents={deleteBtn} />
        </>
      ) : null}
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  width: 33.5rem;
  height: 26.6rem;
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

const BoothName = styled.input`
  margin-bottom: 0.8rem;
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.fontStyles.head5}
  background-color: transparent;
  border: none;
`;

const BoothIntroduction = styled.textarea`
  color: ${(props) => props.theme.colors.gray300};
  width: 100%;
  background-color: transparent;
  border: none;
  ${(props) => props.theme.fontStyles.subHead1}
  font-weight:400;
  padding: 0.5rem 0;
  border-top: 1px solid transparent;
  border-image: linear-gradient(to right, white, black);
  border-image-slice: 1;
`;
