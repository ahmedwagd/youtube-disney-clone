// Main imports
import React from 'react';

// Components& pages
import {
  Container,
  Content,
  BgImage,
  CTA,
  CTALogoOne,
  SignUp,
  Description
} from './Login.styles';
// Styles

const Login = () => {
  return (
    <>
      <Container>
        <Content>
          <CTA>
            <CTALogoOne src='/assets/images/cta-logo-one.svg' alt='' />
            <SignUp>
              GET ALL THERE
            </SignUp>
            <Description>
              Get Premier Access to Raya and the Last Dragon for an additional fee
              with a Disney+ subscription. As of 03/26/21, the price of Disney+
              and The Disney Bundle will increase by $1.
            </Description>
            <CTALogoOne src='/assets/images/cta-logo-two.png' alt='' />
          </CTA>
          <BgImage />
        </Content>
      </Container>
    </>
  )
}

export default Login;