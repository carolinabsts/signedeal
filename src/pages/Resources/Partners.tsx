import { FC } from "react";
import Container from "../../commons/Container/Container";
import Marker from "../../commons/Marker/Marker";
import Section from "../../commons/Section/Section"
import Title from "../../commons/Title/Title";
import VideoCard from "../../commons/VideoCard/VideoCard";
import { WIDTH } from "../../const/widthBreakpoint";
import { useDisplaySize } from "../../hooks/useDisplaySize";
import { useSEO } from "../../hooks/useSEO";
import { partners } from '../../mockups/partners';
import './Partners.css';

const Company: FC<{}> = () => {
    const { widthSize } = useDisplaySize();
    useSEO('', 'Signedeal | Resources');
    return (
        <Section className="CompanyPage__container">
            <Container>
                <Title styles={{ margin: widthSize > WIDTH ? `60px 0` : `30px 0` }}>
                    <Marker>Customer stories</Marker>
                </Title>
                { partners.map((c, idx) => 
                idx %2 === 0 ?
                <VideoCard
                width={450}
                key={c.title}
                item={c}
                />
                :
                <VideoCard
                reverse={widthSize > WIDTH ? true : false}
                width={450}
                key={c.title}
                item={c}
                />
                )}
            </Container>
        </Section>
    )
};

export default Company;