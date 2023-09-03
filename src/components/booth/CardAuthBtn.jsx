import styled from 'styled-components';

export default function CardAuthBtn({ contents }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {contents.map((content, index) => {
        return (
          <AuthBtnWrapper key={content.text} moreThanOne={contents.length > 1} onClick={content.onClick}>
            <span>{<content.icon />}</span>
            <span>{content.text}</span>
          </AuthBtnWrapper>
        );
      })}
    </div>
  );
}

const AuthBtnWrapper = styled.div`
  margin-top: 0.8rem;
  padding: 0.8rem 0;
  background-color: ${(props) => props.theme.colors.gray800};
  span {
    ${(props) => props.theme.fontStyles.body2}
  }
  width: ${(props) => (props.moreThanOne ? '49%' : '100%')};
  display: flex;
  justify-content: center;
`;
