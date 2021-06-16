import { Typography } from "@material-ui/core";
import { FC } from "react";
import Container from "../../commons/Container/Container";
import Marker from "../../commons/Marker/Marker";
import ProfilePhoto from "../../commons/ProfilePhoto/ProfilePhoto";
import Section from "../../commons/Section/Section"
import Title from "../../commons/Title/Title";
import { WIDTH } from "../../const/widthBreakpoint";
import { useDisplaySize } from "../../hooks/useDisplaySize";
import { useSEO } from "../../hooks/useSEO";
import { company } from "../../mockups/company";
import ThirdSection from "../Landing/sections/ThirdSection";
import './Company.css';

const Company: FC<{}> = () => {
    const { widthSize } = useDisplaySize();
    useSEO(`Signedeal is a fully automated high-volume 
    negotiation system capable of sustaining massive 
    negotiation threads.`, 'Signedeal | Company');
    return (
        <>
            <Section>
                <Container>
                    <Title 
                    styles={{ margin: widthSize > WIDTH ? `60px 0 20px 0` : `30px 0` }}>
                        <Marker>About us</Marker>
                    </Title>
                    <Typography 
                    className="CompanyDescription__subtitle">
                        Signedeal is a fully automated high-volume 
                        negotiation system capable of sustaining massive 
                        negotiation threads. 
                    </Typography>
                    <Typography 
                    className="CompanySubtitle__subtitle"
                    variant="h3">
                        All the best in one place
                    </Typography>
                    <div className="CompanyImg__container">
                        <img src="https://i.ibb.co/5YyGDmK/imagen-grande.png" alt="img"/>
                    </div> 
                </Container>
            </Section>
            <ThirdSection data={company}/>
            <Section>
                <Typography className="CompanyPhotos__section">
                    Leadership
                </Typography>
                <Container>
                    <div className="CompanyPhotos__container">
                        <ProfilePhoto
                        img="https://i.ibb.co/Xx6zyWp/Esteban-Berenstein-edited.png"
                        fullName="Esteban Berenstein"
                        description="CEO and Co-Founder"
                        />
                        <ProfilePhoto
                        img="https://i.ibb.co/88tzyT9/Martha-Bayter-1.png"
                        fullName="Martha Bayter"
                        description="CFO and Co-Founder"
                        />
                    </div>
                </Container>
            </Section>
        </>
    )
};

export default Company;