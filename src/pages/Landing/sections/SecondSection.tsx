import { Grid, Typography } from "@material-ui/core";
import { FC } from "react";
import Container from "../../../commons/Container/Container";
import Section from "../../../commons/Section/Section";
import { WIDTH } from "../../../const/widthBreakpoint";
import { useDisplaySize } from "../../../hooks/useDisplaySize";
import '../Landing.css';

const SecondSection: FC<{}> = () => {
    const { widthSize } = useDisplaySize();
    return (
        <Section
        className="Landing__secondSection--container">
            <Container>
                <Grid container spacing={widthSize > WIDTH ? 2 : 1}>
                    <Grid item xs={widthSize > WIDTH ? 7 : 10}>
                        <Grid item xs={6}>
                            <Typography 
                            className="Landing__title--secondSection"
                            variant="h3">
                                A fully automatic negotiation platform
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid
                    style={{ marginBottom: widthSize > WIDTH ? 0 : 30, 
                    marginTop: widthSize > WIDTH ? 0 : 20 }}
                    item 
                    xs={widthSize > WIDTH ? 5 : 12}>
                        <Grid item xs={10}>
                            <Typography 
                            className="Landing__subtitle--secondSection"
                            variant="h6">
                            <b style={{ fontStyle: 'italic'}}> Able to sustain massive negotiation threads based on a 
                            pre-defined engagement script.</b> From the initial contacts 
                            to the negotiation of different deal options up to the 
                            final e-signature of the contract, Signedeal will contact 
                            the end user/customer through different communication 
                            channels like multilingual-IVR, SMS, EMAIL and CCP 
                            (Customer Centric Portal) - Our edge negotiation technology.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Section>
    )
};

export default SecondSection;