import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export const GoThrough = () => {
  /** pwa 설치 관련 */
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('transitionend', handler);
  }, []);

  const onClick = (evt) => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };
  if (!supportsPWA) {
    return null;
  }

  return (
    <Wrapper className="link-button" id="setup_button" aria-label="Install app" onClick={onClick}>
      <svg width="3.2rem" height="3.2rem" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="16" fill="#373737" />
        <g clipPath="url(#clip0_975_15039)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.2105 9.78935C21.4484 9.02896 20.4157 8.60193 19.3392 8.60193C18.2626 8.60193 17.23 9.02896 16.4678 9.78935L15.0992 11.1573C14.9698 11.2965 14.8995 11.4805 14.903 11.6704C14.9065 11.8604 14.9835 12.0416 15.1179 12.176C15.2522 12.3103 15.4334 12.3874 15.6234 12.3908C15.8134 12.3943 15.9973 12.324 16.1365 12.1947L17.5052 10.8267C17.992 10.341 18.6515 10.0683 19.3392 10.0683C20.0268 10.0683 20.6864 10.341 21.1732 10.8267C21.4148 11.0669 21.6064 11.3527 21.7369 11.6676C21.8673 11.9824 21.934 12.3199 21.9332 12.6607C21.9341 13.0015 21.8674 13.339 21.7369 13.6538C21.6065 13.9686 21.4148 14.2544 21.1732 14.4947L18.7725 16.8953C17.7932 17.8753 16.0845 17.8753 15.1045 16.8953C14.9423 16.7336 14.8022 16.5512 14.6878 16.3527C14.5909 16.184 14.431 16.0607 14.2432 16.01C14.0554 15.9592 13.8552 15.9851 13.6865 16.082C13.5178 16.1789 13.3945 16.3388 13.3438 16.5266C13.293 16.7144 13.3189 16.9147 13.4158 17.0833C13.5938 17.392 13.8125 17.678 14.0672 17.9327C14.4434 18.3108 14.8909 18.6107 15.3838 18.8148C15.8766 19.019 16.405 19.1234 16.9385 19.122C17.472 19.1234 18.0004 19.0191 18.4933 18.8149C18.9861 18.6108 19.4336 18.3109 19.8098 17.9327L22.2105 15.5327C22.5888 15.1563 22.8887 14.7086 23.0929 14.2155C23.297 13.7224 23.4014 13.1937 23.3998 12.66C23.4012 12.1265 23.2969 11.5981 23.0927 11.1052C22.8886 10.6124 22.5887 10.1649 22.2105 9.78868"
            fill="#8C8C8C"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.863 19.8053L14.4943 21.174C14.0073 21.6593 13.3478 21.9319 12.6603 21.9319C11.9728 21.9319 11.3133 21.6593 10.8263 21.174C10.5848 20.9336 10.3933 20.6478 10.2628 20.333C10.1324 20.0182 10.0656 19.6807 10.0663 19.34C10.0663 18.6473 10.3363 17.996 10.8263 17.5067L13.227 15.1053C13.5089 14.8239 13.8519 14.6112 14.2292 14.4836C14.6066 14.356 15.0082 14.3169 15.4031 14.3693C15.798 14.4218 16.1755 14.5644 16.5065 14.7861C16.8374 15.0079 17.1129 15.3027 17.3116 15.648C17.3596 15.7315 17.4236 15.8048 17.4998 15.8636C17.5761 15.9224 17.6632 15.9656 17.7562 15.9907C17.8492 16.0158 17.9462 16.0224 18.0418 16.0101C18.1373 15.9977 18.2294 15.9666 18.313 15.9187C18.3965 15.8707 18.4697 15.8067 18.5285 15.7304C18.5873 15.6542 18.6305 15.567 18.6557 15.474C18.6808 15.3811 18.6874 15.284 18.675 15.1885C18.6627 15.093 18.6316 15.0008 18.5836 14.9173C18.2724 14.3771 17.841 13.9157 17.323 13.5688C16.8049 13.2219 16.214 12.9987 15.596 12.9166C14.9779 12.8345 14.3493 12.8957 13.7586 13.0953C13.168 13.295 12.6311 13.6278 12.1896 14.068L9.78896 16.4687C9.41079 16.8449 9.11097 17.2924 8.90683 17.7853C8.70268 18.2781 8.59827 18.8065 8.59962 19.34C8.59962 20.4247 9.02229 21.4447 9.78896 22.2113C10.1656 22.5888 10.6133 22.888 11.106 23.0918C11.5988 23.2955 12.127 23.3998 12.6603 23.3987C13.7003 23.3987 14.7396 23.0027 15.5316 22.212L16.9003 20.8433C17.0296 20.7041 17.0999 20.5202 17.0964 20.3302C17.093 20.1403 17.0159 19.959 16.8816 19.8247C16.7472 19.6903 16.566 19.6133 16.376 19.6098C16.1861 19.6063 16.0021 19.6767 15.863 19.806"
            fill="#8C8C8C"
          />
        </g>
        <defs>
          <clipPath id="clip0_975_15039">
            <rect width="16" height="16" fill="white" transform="translate(8 8)" />
          </clipPath>
        </defs>
      </svg>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  cursor: pointer;
`;
