import { Button, Typography } from '@material-ui/core';
import { FC } from 'react';
import { useHistory } from 'react-router';
import Container from '../../commons/Container/Container';
import Marker from '../../commons/Marker/Marker';
import { pathString } from '../../commons/Router/pathString';
import Section from '../../commons/Section/Section';
import Title from '../../commons/Title/Title';
import { WIDTH } from '../../const/widthBreakpoint';
import { useDisplaySize } from '../../hooks/useDisplaySize';
import { useSEO } from '../../hooks/useSEO';
import './Newsroom.css';

const Newsroom: FC<{}> = () => {
    const { widthSize } = useDisplaySize();
    const history = useHistory();
    useSEO('', 'Signedeal | Newsroom');
    return (
        <Section>
            <Container>
                <div className="NewsroomPage__pageSection">
                    <Title
                    styles={{ margin: widthSize > WIDTH ? `60px 0 30px 0` : `30px 0` }}>
                        <Marker>Press releases</Marker>
                    </Title>
                    <div className="NewsroomPage__container">
                        <Typography 
                        className="NewsroomPage__title"
                        variant="h5">
                            Celonis & Signedeal
                        </Typography>
                        <div>
                            <img src="https://i.ibb.co/K2VghrJ/Image.png" alt="img"/>
                        </div>
                        <Typography
                        className="NewsroomPage__description"
                        >
                            Signedeal Partners with Celonis to Help 
                            Companies Automate Strategic Buying Activities
                        </Typography>
                        <Button 
                        onClick={() => history.push(pathString.details)}
                        color="primary">
                            Read more
                        </Button>
                    </div>
                </div>
            </Container>
        </Section>
    )
};

export default Newsroom;