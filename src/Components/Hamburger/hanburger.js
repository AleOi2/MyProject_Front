import React from 'react';
import styled from 'styled-components';
import { safeAccess, elvisOperator } from '../../utils/utils';

const theme = {
  primaryDark: '#0D0C1D',
  primaryLight: '#EFFFFA',
  primaryHover: '#343078',
  mobile: '576px',
}



export const StyledBurger = styled.button`

  z-index: ${(props) => {
    let zIndex = safeAccess(props, ['styles', 'StyledBurger', 'zIndex'], undefined);
    return elvisOperator(zIndex, zIndex, '102')
  }};

  border: ${(props) => {
    let border = safeAccess(props, ['styles', 'StyledBurger', 'border'], undefined);
    return elvisOperator(border, border, '2px solid red')
  }};

  position: ${(props) => {
    let position = safeAccess(props, ['styles', 'StyledBurger', 'position'], undefined);
    return elvisOperator(position, position, 'absolute')
  }};

  top: ${(props) => {
    let top = safeAccess(props, ['styles', 'StyledBurger', 'top'], undefined);
    return elvisOperator(top, top, '6%')
  }};

  left: ${(props) => {
    let left = safeAccess(props, ['styles', 'StyledBurger', 'left'], undefined);
    return elvisOperator(left, left, '220px')
  }};

  display: ${(props) => {
    let display = safeAccess(props, ['styles', 'StyledBurger', 'display'], undefined);
    return elvisOperator(display, display, 'flex')
  }};

  flex-direction: ${(props) => {
    let flexDirection = safeAccess(props, ['styles', 'StyledBurger', 'flexDirection'], undefined);
    return elvisOperator(flexDirection, flexDirection, 'column')
  }};

  justify-content: ${(props) => {
    let justifyContent = safeAccess(props, ['styles', 'StyledBurger', 'justifyContent'], undefined);
    return elvisOperator(justifyContent, justifyContent, 'space-around')
  }};

  width: ${(props) => {
    let width = safeAccess(props, ['styles', 'StyledBurger', 'width'], undefined);
    return elvisOperator(width, width, '2rem')
  }};

  height: ${(props) => {
    let height = safeAccess(props, ['styles', 'StyledBurger', 'height'], undefined);
    return elvisOperator(height, height, '2rem')
  }};

  background: ${(props) => {
    let background = safeAccess(props, ['styles', 'StyledBurger', 'background'], undefined);
    return elvisOperator(background, background, 'transparent')
  }};

  border: ${(props) => {
    let border = safeAccess(props, ['styles', 'StyledBurger', 'border'], undefined);
    return elvisOperator(border, border, 'none')
  }};

  cursor: ${(props) => {
    let cursor = safeAccess(props, ['styles', 'StyledBurger', 'cursor'], undefined);
    return elvisOperator(cursor, cursor, 'pointer')
  }};

  padding: ${(props) => {
    let padding = safeAccess(props, ['styles', 'StyledBurger', 'padding'], undefined);
    return elvisOperator(padding, padding, '0')
  }};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    left: ${(props) => {
      let left = safeAccess(props, ['styles', 'StyledBurger', 'left'], undefined);
      return elvisOperator(left, left, '10px')
    }};

    transition: ${(props) => {
      let transition = safeAccess(props, ['styles', 'StyledBurger', 'transition'], undefined);
      return elvisOperator(transition, transition, 'all 0.3s linear')
    }};

    transform: ${({ open }) => open ? 'translateX(390px)' : 'translateX(0)'};
  }  
  
  &:focus {
    outline: none;
  }
  
  div {
    width: ${(props) => {
    let width = safeAccess(props, ['styles', 'StyledBurgerDiv', 'width'], undefined);
    return elvisOperator(width, width, '2rem')
  }};
    
    height: ${(props) => {
    let height = safeAccess(props, ['styles', 'StyledBurgerDiv', 'height'], undefined);
    return elvisOperator(height, height, '0.25rem')
  }};

    border-radius: ${(props) => {
    let borderRadius = safeAccess(props, ['styles', 'StyledBurgerDiv', 'borderRadius'], undefined);
    return elvisOperator(borderRadius, borderRadius, '10px')
  }};

    transition: ${(props) => {
    let transition = safeAccess(props, ['styles', 'StyledBurgerDiv', 'transition'], undefined);
    return elvisOperator(transition, transition, 'all 0.3s linear')
  }};

    position: ${(props) => {
    let position = safeAccess(props, ['styles', 'StyledBurgerDiv', 'position'], undefined);
    return elvisOperator(position, position, 'relative')
  }};

    transform-origin: ${(props) => {
    let transformOrigin = safeAccess(props, ['styles', 'StyledBurgerDiv', 'transformOrigin'], undefined);
    return elvisOperator(transformOrigin, transformOrigin, '1px')
  }};

    background: ${({ theme, open }) => open ? theme.primaryDark : theme.primaryLight};

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }   
  }
`;

export const Burger = (props) => {
  const {
    open,
    setOpen,
    styles
  } = props
  return (
    <StyledBurger
      theme={theme}
      open={open}
      onClick={() => setOpen(!open)}
      styles={styles}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default Burger;