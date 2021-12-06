import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Front End Web Developer <br />
        </SectionTitle>
        <SectionText>
        I am a creative, driven front-end web developer with a talent for quickly developing elegant solutions to problems. With a drive and spirit of excellence, I am passionate about building functional and enticing web applications.
        </SectionText>
        <Button onClick={() => window.location = '#about'} >Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;