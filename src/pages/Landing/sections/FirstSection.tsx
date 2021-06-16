import { Button, Grid, Typography } from "@material-ui/core";
import { FC } from "react";
import Container from "../../../commons/Container/Container";
import Section from "../../../commons/Section/Section"
import { WIDTH } from "../../../const/widthBreakpoint";
import { useDisplaySize } from "../../../hooks/useDisplaySize";
import '../Landing.css';

const FirstSection: FC<any> = () => {
    const { heightSize, widthSize } = useDisplaySize();
    return (
        <Section 
        className="Landing__coverSection--container"
        height={heightSize-64}>
            <Container>
                <Grid 
                className="LandingPage__Mobile"
                container 
                spacing={widthSize > WIDTH ? 2 : 1}>
                    <Grid 
                    xs={widthSize > WIDTH ? 7 : 12} 
                    className="FirstSection__title--container">
                        <Grid xs={12} 
                        className="FirstSection__leftSide">
                            <Typography 
                            className="Landing__subtitle"
                            variant="h6">
                                Signedeal
                            </Typography>
                            <Typography 
                            className="Landing__title"
                            variant="h2">
                                The Smart Negotiation Platform
                            </Typography>
                            <a
                            style={{ zIndex: 10, cursor: 'pointer' }}
                            href="https://www.celonis.com/ems/apps/procurement/?modalId=6upUOv8UnaenpMY3FxQWWN">
                            <Button 
                            style={{
                                marginTop: 40,
                                zIndex: 100,
                                cursor: 'pointer'
                            }}
                            variant="contained"
                            color="secondary">
                                Request a demo
                            </Button>
                            </a>
                            <img 
                            src="https://i.ibb.co/xJF8gQD/Group-8.png" alt="img__cover"/>
                        </Grid>
                    </Grid>
                    <Grid
                    className="FirstSection__img--container"
                    xs={widthSize > WIDTH ? 5 : 12}>
                        <img src="https://i.ibb.co/kcpW52p/Vector-1.png" alt="img"/>
                        <img src="https://i.ibb.co/9tdGHtp/undraw-Data-points-re-vkpq-1.png" alt="img_cover"/>
                    </Grid>
                </Grid>
            </Container>
        </Section>
    )
};

export default FirstSection;