import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import { useStaticQuery, graphql } from 'gatsby';
import { Icon } from 'react-icons-kit';
import { mediaRecordOutline } from 'react-icons-kit/typicons/mediaRecordOutline';
import { plus } from 'react-icons-kit/typicons/plus';
import { starOutline } from 'react-icons-kit/typicons/starOutline';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Image from 'common/src/components/Image';
import Container from 'common/src/components/UI/Container';
import FeatureBlock from 'common/src/components/FeatureBlock';
import { SectionHeader } from '../appModern.style';
import SectionWrapper, { FeatureWrapper } from './features.style';

const Features = () => {
  const data = useStaticQuery(graphql`
    query {
      appModernJson {
        features {
          slogan
          title
          items {
            id
            color
            icon {
              publicURL
            }
            title
            description
          }
        }
      }
    }
  `);
  const { slogan, title, items } = data.appModernJson.features;

  return (
    <SectionWrapper id="features">
      <Container>
        <SectionHeader>
          <Fade up>
            <Heading as="h5" content={slogan} />
            <Heading content={title} />
          </Fade>
        </SectionHeader>
        Zur Eindämmung der Krise werden in schneller Folge viele rechtliche Regelungen erlassen, insbesondere in Form von Allgemeinverfügungen und Verordnungen. Sie kommen zu einem kleinen Teil von Bund, viele auch von den Ländern, die meisten aber von den Kreisen und kreisfreien Städten. Die Inhalte der Regelungen sind zwar in einem gewissen Maße koordiniert, aber nicht völlig identisch. Zusätzlich gibt es noch Erlasse der Landesregierungen an die Kreise, die zum Verständnis der Entscheidungen hilfreich sind, wenn sie auch nicht direkt auf die Bürger wirken. Zur Auslegung der Regelungen sind auch die amtlichen Begründungen (soweit verfügbar) interessant. Auf den Webseiten der vielen regelnden Stellen, sind die Dokumente auch nicht immer schnell zu finden. Es ist deshalb schwer, den Überblick zu behalten, was an einem bestimmten Ort gerade gilt.

Die Idee ist es eine Website bereitzustellen, welche alle Regelungen gut sortiert und durchsuchbar enthält. Uns ist dabei wichtig, dass eine Sortierung nach räumlichen Gebieten und Sachbereichen, um die jeweils gültigen Regelungen zu finden ist und einen Vergleich zu ermöglichen. Auch sind Metadaten für eine Suche hilfreich. Um der Entwicklung Schritt zu halten können, ist es wichtig, dass es als Nutzer möglich ist, auf neue Regelungen hinzuweisen und/oder mitzumachen, indem man eine bestimmte Region jeweils auf dem aktuellen Stand hält.
        <FeatureWrapper>
          {items.map(item => (
            <Fade up delay={100 * item.id} key={`feature-key${item.id}`}>
              <FeatureBlock
                style={{ '--color': `${item.color}` }}
                icon={
                  <Fragment>
                    <Icon className="plus" icon={plus} />
                    <Icon className="circle" icon={mediaRecordOutline} />
                    <Image src={item.icon.publicURL} alt={item.title} />
                    <Icon className="star" icon={starOutline} />
                  </Fragment>
                }
                iconPosition="left"
                title={<Heading as="h3" content={item.title} />}
                description={<Text content={item.description} />}
              />
            </Fade>
          ))}
        </FeatureWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Features;
