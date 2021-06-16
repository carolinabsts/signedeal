import { Typography } from '@material-ui/core';
import { FC } from 'react';
import Container from '../../../commons/Container/Container';
import LittleParagraph from '../../../commons/LittleParagraph/LittleParagraph';
import Marker from '../../../commons/Marker/Marker';
import Section from '../../../commons/Section/Section';
import Title from '../../../commons/Title/Title';
import { WIDTH } from '../../../const/widthBreakpoint';
import { useDisplaySize } from '../../../hooks/useDisplaySize';
import { useSEO } from '../../../hooks/useSEO';
import { details } from '../../../mockups/details';
import './Details.css';

const Details: FC<{}> = () => {
    const { widthSize } = useDisplaySize();
    useSEO('', 'Signedeal | Newsroom');
    return (
        <Section>
            <Container>
                <div className="DetailsPage__container">
                    <Title
                    styles={{ 
                        margin: widthSize > WIDTH ? `60px 0 20px 0` : `30px 0`,
                        width: widthSize > WIDTH ? '50%' : '100%'
                    }}>
                        Signedeal Partners with Celonis to <Marker>Help 
                        Companies Automate Strategic Buying Activities</Marker>
                    </Title>
                    <Typography
                    className="DetailsPage__date"
                    >
                        May 13, 2021
                    </Typography>
                    <div className="DetailsPage__paragraphs--container">
                    { details.map(detail => 
                        <LittleParagraph
                        key={detail.title}
                        title={detail.title}
                        paragraph={detail.paragraph}
                        />
                    )}
                    </div>
                </div>
            </Container>
        </Section>
    )
};

export default Details;