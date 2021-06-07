import styled from 'styled-components';


export const mainColor = '#f9f9f9';
export const bgColor = '#040714';

export const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media screen and (min-width: 576px) {
    max-width: 540px;
  }
  @media screen and (min-width: 768px) {
    max-width: 720px;
  }
  @media screen and (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`;