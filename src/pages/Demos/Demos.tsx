import { Button } from '@material-ui/core';
import { FC } from 'react';
import Container from '../../commons/Container/Container';
import LittleParagraph from '../../commons/LittleParagraph/LittleParagraph';
import Marker from '../../commons/Marker/Marker';
import Section from '../../commons/Section/Section';
import Title from '../../commons/Title/Title';
import { WIDTH } from '../../const/widthBreakpoint';
import { useDisplaySize } from '../../hooks/useDisplaySize';
import { useSEO } from '../../hooks/useSEO';
import { demos } from '../../mockups/demos';
import './Demos.css';

const Details: FC<{}> = () => {
    const { widthSize } = useDisplaySize();
    useSEO('', 'Signedeal | DEMOs');
    return (
        <Section>
            <Container>
                <div className="DetailsPage__container">
                    <Title
                    styles={{ 
                        margin: widthSize > WIDTH ? `60px 0 20px 0` : `30px 0`,
                        width: widthSize > WIDTH ? '50%' : '100%'
                    }}>
                        Signedal <Marker>DEMOs</Marker>
                    </Title>
                    <Title
                    styles={{ 
                        margin: widthSize > WIDTH ? `60px 0` : `10px 0 30px 0`,
                        width: widthSize > WIDTH ? '50%' : '100%'
                    }}>
                        Signedeal AR Invoice Follow-up DEMO
                    </Title>
                    <div className="DetailsPage__paragraphs--container">
                    { demos.map(detail => 
                        <LittleParagraph
                        key={detail.title}
                        title={detail.title}
                        paragraph={detail.paragraph}
                        />
                    )}
                    </div>
                    <div className="Demos__button--watchDemo">
                        <a href="https://www.linkedin.com/smart-links/AQEA1J5WLhTehQ/b91fd3dd-db75-463b-96f9-adf80c7c99b4">
                            <Button
                            variant="contained"
                            color="primary">Watch demo
                            </Button>
                        </a>
                    </div>
                </div>
            </Container>
        </Section>
    )
};

export default Details;