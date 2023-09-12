import styled from 'styled-components';
import CardAuthBtn from './CardAuthBtn';
import { ReactComponent as SaveIcon } from '@/assets/icons/saveIcon.svg';
import { ReactComponent as EditIcon } from '@/assets/icons/editIcon.svg';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useRecoilValue } from 'recoil';
import { adminState } from '@/libs/store';
import usePatchFoodTrucks from '@/query/patch/usePatchFoodTrucks';
import useDeleteFoodTrucks from '@/query/delete/useDeleteFoodTrucks';

EdittingFoodTruckCard.propTypes = {
  data: PropTypes.shape({
    brandName: PropTypes.string,
    introduction: PropTypes.string,
  }),
  closeEdit: PropTypes.func,
};

export default function EdittingFoodTruckCard({ data, closeEdit }) {
  const isAuth = useRecoilValue(adminState);
  const [boothName, setBoothName] = useState(data.brandName);
  const [boothIntroduction, setBoothIntroduction] = useState(data.introduction);
  const [active, setActive] = useState(false);

  /** 푸드트럭 수정 훅 */
  const { patchFoodTruck, isError: patchError } = usePatchFoodTrucks(data);
  /** 푸드트럭 삭제 훅 */
  const { deleteFoodTruck, isError: deleteError } = useDeleteFoodTrucks(data);

  const saveBtnClicked = () => {
    patchFoodTruck({
      brandName: boothName,
      introduction: boothIntroduction,
    });

    alert('저장되었습니다?');
    closeEdit();
  };
  const deleteBtnClicked = () => {
    deleteFoodTruck();
    if (window.confirm('정말 삭제합니까?')) {
      deleteFoodTruck();
    } else {
      alert('취소합니다.');
    }
    closeEdit();
  };
  const boothNameChanged = (e) => {
    setBoothName(e.target.value);
  };
  const boothIntroductionChanged = (e) => {
    setBoothIntroduction(e.target.value);
  };

  /** 에러발생 */
  useEffect(() => {
    if (patchError) alert('수정하기 에러 발생! 관리자에게 문의하세요');
    if (deleteError) alert('삭제하기 에러 발생! 관리자에게 문의하세요');
  }, [deleteError, patchError]);

  useEffect(() => {
    if (boothName !== '' && boothIntroduction !== '') {
      setActive(true);
    } else setActive(false);
  }, [boothName, boothIntroduction]);

  const saveBtn = [{ icon: SaveIcon, text: '저장', active, onClick: saveBtnClicked }];
  const deleteBtn = [{ icon: EditIcon, text: '삭제', active: true, onClick: deleteBtnClicked }];
  return (
    <CardWrapper>
      <BoothText>
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
  width: 100%;
  height: 26.6rem;
  margin-top: 2.4rem;
`;

const BoothText = styled.div`
  padding: 1.8rem 2rem;
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
