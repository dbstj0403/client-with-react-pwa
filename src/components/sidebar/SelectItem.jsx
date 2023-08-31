import React from 'react';
import styled from 'styled-components';
import theme from './../../styles/theme';
import { useRecoilState } from 'recoil';
import { pageState } from '@/libs/store';

const SelectItem = () => {
  const [page, isPage] = useRecoilState(pageState);

  const handleSelectOptionClick = (selectedPage) => {
    isPage(selectedPage);
    window.location.replace(`/${selectedPage}`);
  };

  return (
    <Wrapper>
      <SelectOption onClick={() => handleSelectOptionClick('')} active={page === '' ? 1 : 0}>
        전체 로드맵
      </SelectOption>
      <SelectOption onClick={() => handleSelectOptionClick('stage')} active={page === 'stage' ? 1 : 0}>
        무대
      </SelectOption>
      <SelectOption onClick={() => handleSelectOptionClick('hongikzone')} active={page === 'hongikzone' ? 1 : 0}>
        홍익존
      </SelectOption>
      <SelectOption
        onClick={() => handleSelectOptionClick('booth/promotion')}
        active={page === 'booth/promotion' ? 1 : 0}
      >
        수익 부스
      </SelectOption>
      <SelectOption onClick={() => handleSelectOptionClick('booth/pub')} active={page === 'booth/pub' ? 1 : 0}>
        주점
      </SelectOption>
      <SelectOption onClick={() => handleSelectOptionClick('wowdjfestival')} active={page === 'wowdjfestival' ? 1 : 0}>
        와우 디제잉 페스티벌
      </SelectOption>
      <SelectOption
        onClick={() => handleSelectOptionClick('booth/foodtruck')}
        active={page === 'booth/foodtruck' ? 1 : 0}
      >
        푸드트럭
      </SelectOption>
      <SelectOption onClick={() => handleSelectOptionClick('facilities')} active={page === 'facilities' ? 1 : 0}>
        기타 편의시설
      </SelectOption>
      <SelectOption onClick={() => handleSelectOptionClick('madeby')} active={page === 'madeby' ? 1 : 0}>
        만든이들
      </SelectOption>
    </Wrapper>
  );
};

export default SelectItem;

const Wrapper = styled.div`
  width: 100%;
`;

const SelectOption = styled.div`
  height: 6.4rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 1.6rem 0 1.6rem ${(props) => (props.active ? '2.2rem' : '2.4rem')};
  color: ${theme.colors.white};
  box-sizing: border-box;
  border-left: ${(props) => (props.active ? `0.2rem solid ${theme.colors.green}` : 'none')};
  ${(props) => props.theme.fontStyles.head5};
  &:hover {
    background-color: ${theme.colors.gray800};
  }
`;
