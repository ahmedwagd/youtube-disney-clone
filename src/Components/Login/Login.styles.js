import styled from 'styled-components';

export const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;
export const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;
export const BgImage = styled.div`
  height: 100%;
  background-image: url('/assets/images/login-background.jpg');
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;
export const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
  transition-timing-function: ease-out;
  transition: opacity .2s ;
  text-align: center;
  /* margin-bottom: 2vw; */
  /* justify-content: center;
  align-items: center; */
  /* margin-top: 0; */
  /* margin-right: auto; */
  /* margin-left: auto; */
`;
export const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

export const SignUp = styled.a`
  cursor: pointer;
  font-weight: bold;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;

  &:hover {
    background-color: #0483ee;
  }
`;
export const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin-bottom: 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;