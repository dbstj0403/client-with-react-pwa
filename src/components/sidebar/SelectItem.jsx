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
      <SelectOption onClick={() => handleSelectOptionClick('booth')} active={page === 'booth' ? 1 : 0}>
        수익 부스
      </SelectOption>
      <SelectOption onClick={() => handleSelectOptionClick('booth/pub')} active={page === 'booth/pub' ? 1 : 0}>
        주점
      </SelectOption>
      <SelectOption
        onClick={() => handleSelectOptionClick('booth/foodtruck')}
        active={page === 'booth/foodtruck' ? 1 : 0}
      >
        푸드트럭
      </SelectOption>
      <SelectOption onClick={() => handleSelectOptionClick('wowdjfest')} active={page === 'wowdjfest' ? 1 : 0}>
        와우 디제잉 페스티벌
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
  padding: 1.6rem 0 1.6rem 2.4rem;
  color: ${(props) => (props.active ? 'rgba(0, 117, 255, 1)' : theme.colors.black)};
  ${(props) => props.theme.fontStyles.head5};
  &:hover {
    background-color: rgba(246, 246, 246, 1);
  }
`;
