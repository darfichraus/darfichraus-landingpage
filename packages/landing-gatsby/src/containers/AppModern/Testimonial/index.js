import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import Image from 'common/src/components/Image';
import Container from 'common/src/components/UI/Container';
import Rating from 'common/src/components/Rating';
import GlideCarousel from 'common/src/components/GlideCarousel';
import GlideSlide from 'common/src/components/GlideCarousel/glideSlide';
import { SectionHeader } from '../appModern.style';
import SectionWrapper, { CarouselWrapper } from './testimonial.style';

const Testimonial = () => {
  const data = useStaticQuery(graphql`
    query {
      appModernJson {
        testimonial {
          slogan
          title
          reviews {
            id
            title
            description
            avatar
            name
            designation
            review
          }
        }
      }
    }
  `);
  const { slogan, title, reviews } = data.appModernJson.testimonial;

  const glideOptions = {
    type: 'carousel',
    gap: 0,
    autoplay: 10000,
    perView: 3,
    animationDuration: 1000,
    breakpoints: {
      991: {
        perView: 1,
      },
    },
  };

  return (
    <SectionWrapper id="testimonial">
      <Container>
        <SectionHeader>
          <Fade up>
            <Heading as="h5" content={slogan} />
            <Heading content={title} />
          </Fade>
        </SectionHeader>

        <CarouselWrapper>
          <Fade up delay={100}>
            <GlideCarousel
              options={glideOptions}
              nextButton={
                <Button
                  icon={<i className="flaticon-next" />}
                  aria-label="Next"
                  variant="fab"
                />
              }
              prevButton={
                <Button
                  icon={<i className="flaticon-left-arrow" />}
                  aria-label="Prev"
                  variant="fab"
                />
              }
            >
              <Fragment>
                {reviews.map(item => (
                  <GlideSlide key={`testimonial--key${item.id}`}>
                    <div className="review-card">
                      <Heading as="h3" content={item.title} />
                      <Text content={item.description} />
                      
                    </div>
                  </GlideSlide>
                ))}
              </Fragment>
            </GlideCarousel>
          </Fade>
        </CarouselWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Testimonial;
