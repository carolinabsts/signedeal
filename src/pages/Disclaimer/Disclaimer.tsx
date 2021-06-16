import { Typography } from '@material-ui/core';
import { FC } from 'react';
import Container from '../../commons/Container/Container';
import LittleParagraph from '../../commons/LittleParagraph/LittleParagraph';
import Marker from '../../commons/Marker/Marker';
import Section from '../../commons/Section/Section';
import Title from '../../commons/Title/Title';
import { WIDTH } from '../../const/widthBreakpoint';
import { useDisplaySize } from '../../hooks/useDisplaySize';
import { useSEO } from '../../hooks/useSEO';
import { disclaimer } from '../../mockups/disclaimer';
import './Disclaimer.css';

const Disclaimer: FC<{}> = () => {
    const { widthSize } = useDisplaySize();
    useSEO('', 'Signedeal | Disclaimer');
    return (
        <Section>
            <Container>
                <div className="DetailsPage__container">
                    <Title
                    styles={{ 
                        margin: widthSize > WIDTH ? `60px 0 20px 0` : `30px 0`,
                        width: '50%'
                    }}>
                        <Marker>Disclaimer</Marker>
                    </Title>
                    <Typography
                    className="DisclaimerPage__subtitle"
                    >
                        Limitation of Liability
                    </Typography>
                    <div className="DetailsPage__paragraphs--container">
                    { disclaimer.map(dis => 
                        <LittleParagraph
                        key={dis.title}
                        title={dis.title}
                        paragraph={dis.paragraph}
                        />
                    )}
                    </div>
                </div>
            </Container>
        </Section>
    )
};

export default Disclaimer;