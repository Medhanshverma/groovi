import styled from '@emotion/styled';
import React from 'react'
import { Avatar } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function Header() {
  return (
    <HeaderContainer>
      
      <HeaderLeft>
        <HeaderAvatar
          // Add Onlick
        />
        <AccessTimeIcon />
      </HeaderLeft>

      
      <HeaderMiddle>
        <SearchIcon />
        <input placeholder='SEARCH GROOVI' />
      </HeaderMiddle>
      
      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
      
    </HeaderContainer>
  )
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--groovi-color);

`;

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }

`;
const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

const HeaderMiddle = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  text-align: center;
  background-color: #6b8a3d;
  display: flex;
  padding: 0 50px;
  color: white;
  text-color: white;
  border: 1px solid gray;
  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: 0;
    color: white;
    text-color: white;
    ::placeholder {
      color: white;
      text-color: white;
    }
  }
`;

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;



