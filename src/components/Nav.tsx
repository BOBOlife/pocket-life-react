import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
const NavWrapper = styled.div`
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  line-height:24px;
  > ul {
    display:flex;
    > li {
      width:33.333%;
      text-align:center;
      padding:16px;
    }
  }
`;
const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <Link to="/tags">标签页</Link>
                </li>
                <li>
                    <Link to="/money">记账页</Link>
                </li>
                <li>
                    <Link to="/Statistics">统计页</Link>
                </li>
            </ul>
        </NavWrapper>
    );
};
export default Nav;