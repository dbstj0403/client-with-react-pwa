import styled from 'styled-components';

const SideBar = ({ isOpen, setIsOpen }) => {
  const toggleSide = () => {
    setIsOpen(false);
  };

  return <SideBarWrapper isOpen={isOpen}>사이드바입니다.</SideBarWrapper>;
};

export default SideBar;

const SideBarWrapper = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  width: 29.5rem;
  top: 0;
  bottom: 0;
  /*right: 0; */
  transition: 0.4s ease;
  background-color: #e19f9f;
  height: 100%;
  /* z-index: 99; */
`;
