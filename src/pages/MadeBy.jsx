import { pageState } from '@/libs/store';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

function MadeBy() {
  const [page, isPage] = useRecoilState(pageState);
  useEffect(() => {
    isPage('madeby');
  }, []);
  return <>만든이들 페이지입니다.</>;
}

export default MadeBy;
