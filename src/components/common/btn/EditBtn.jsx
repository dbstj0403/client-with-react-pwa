import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { AddIcon, DeleteIcon, ModifyIcon } from '@/assets/icons/edit';
EditBtn.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

/**
 * @param {string} title: 버튼 라벨
 * @param {string} type: 버튼의 타입 각각 modify, delete, add
 */
export default function EditBtn({ title, type, onClick, disabled }) {
  const btnIcons = {
    modify: <ModifyIcon />,
    delete: <DeleteIcon />,
    add: <AddIcon />,
  };

  return (
    <Container onClick={onClick} disabled={disabled}>
      {btnIcons[type]}
      <span>{title}</span>
    </Container>
  );
}

const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 0;
  width: 100%;

  ${({ theme, disabled }) => `
    background: ${theme.colors.gray800};

    span {
      margin-left: 0.6rem;
      color: ${disabled ? theme.colors.gray400 : theme.colors.white};
      ${theme.fontStyles.subHead3};
    }
  `}
`;
