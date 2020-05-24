import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import Input from 'common/src/components/Input';
import Container from 'common/src/components/UI/Container';
import Image from 'common/src/components/Image';
import { download } from 'react-icons-kit/fa/download';
import { instagram } from 'react-icons-kit/fa/instagram';
import { twitter } from 'react-icons-kit/fa/twitter';
import { envelope } from 'react-icons-kit/fa/envelope';
import { Icon } from 'react-icons-kit';


import NewsletterWrapper, { ContactFormWrapper } from './newsletter.style';

const openMail = () => {
  window.location = 'mailto:DarfIchRaus%20Team<info@dafichraus.de>';
};

const openInstagram = () => {
  window.location = 'https://instagram.com/darfichraus.de';
}

const openTwitter = () => {
  window.location = 'https://twitter.com/darfichraus';
}

const Newsletter = ({
  sectionWrapper,
  textArea,
  buttonArea,
  buttonStyle,
  title,
  description,
}) => {
  return (
    <Box {...sectionWrapper} as="section">
      <NewsletterWrapper>
        <Container>
          <Box {...textArea}>
            <Heading content="Kontakt" {...title} />
            <Text
              content="Bei Fragen können Sie uns eine Email schreiben oder einen unserer Social Media Kanäle kontaktieren."
              {...description}
            />
          </Box>
          <Box {...buttonArea}>
            <ContactFormWrapper>
              <Button
                className="text"
                variant="textButton"
                icon={<Icon icon={envelope} />}
                iconPosition="left"
                title="Email"
                onClick={openMail}
              />
               <Button
                className="text"
                variant="textButton"
                icon={<Icon icon={instagram} />}
                iconPosition="left"
                title="Instagram"
                onClick={openInstagram}
              />
               <Button
                className="text"
                variant="textButton"
                icon={<Icon icon={twitter} />}
                iconPosition="left"
                title="Twitter"
                onClick={openTwitter}
              />
            </ContactFormWrapper>
          </Box>
        </Container>
      </NewsletterWrapper>
    </Box>
  );
};

Newsletter.propTypes = {
  sectionWrapper: PropTypes.object,
  textArea: PropTypes.object,
  buttonArea: PropTypes.object,
  buttonStyle: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
};

Newsletter.defaultProps = {
  sectionWrapper: {},
  textArea: {
    mb: ['40px', '40px', '40px', '0', '0'],
    pr: ['0', '0', '0', '80px', '100px'],
  },
  title: {
    fontSize: ['18px', '20px', '22px', '24px', '26px'],
    fontWeight: '500',
    color: '#fff',
    lineHeight: '1.34',
    mb: ['14px', '14px', '14px', '14px', '13px'],
    textAlign: ['center', 'center', 'center', 'left', 'left'],
    letterSpacing: '-0.025em',
  },
  description: {
    fontSize: ['14px', '14px'],
    maxWidth: ['100%', '400px'],
    fontWeight: '400',
    color: '#fefefe',
    lineHeight: '1.7',
    mb: 0,
    textAlign: ['center', 'center', 'center', 'left', 'left'],
  },
  buttonArea: {
    zIndex: 1,
  },
  buttonStyle: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '700',
    pl: '30px',
    pr: '30px',
  },
};

export default Newsletter;
