import styled from 'styled-components';


export const Nav = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;
export const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  cursor: pointer;

  img {
    display: block;
    width: 100%;
  }
`;
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }
    span {
      color: rgb(249 249 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0;
      white-space: nowrap;
      position: relative;
      &:before {
        content: '';
        display: block;
        background-color: rgb(249 249 249);
        height: 2px;
        width: auto;
        border-radius: 0 0 4px 4px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        transform-origin: left center;
        opacity: 0;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1;

      }
    }
  }

  /* @media (max-width: 768px) {
    display: none;
  } */
`;
export const Login = styled.a`
  background-color: rgb(0 0 0 /.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  cursor: pointer;
  transition: all .2s ease-out 0s;
  &:hover {
    background-color: #f9f9f9;
    color: rgb(0 0 0 /.6);
    border-color: transparent;
  }
`;
export const UserImg = styled.img`
  height: 100%;
  
`;