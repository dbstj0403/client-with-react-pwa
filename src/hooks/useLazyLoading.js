import { useState, useEffect } from 'react';

/**
 * useLazyLoading
 *
 * 로딩 중이면 스켈레톤 이미지, 아니면 실제 이미지를 보여주는 것을 판단해주는 custom hook
 * @param observerRef 이미지를 포함하는 ref
 * @returns loading 로딩 중 boolean
 */
function useLazyLoading(observerRef) {
  const [loading, setLoading] = useState(true);

  let observer = null;

  useEffect(() => {
    if (observerRef.current && loading) {
      observer = new IntersectionObserver(([entries]) => {
        if (entries.isIntersecting) {
          setLoading(false);
        }
      });

      observer.observe(observerRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect(observerRef);
      }
    };
  }, [loading, observerRef]);

  return loading;
}

export default useLazyLoading;
