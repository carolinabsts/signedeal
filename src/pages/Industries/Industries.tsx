import { FC } from "react";
import Container from "../../commons/Container/Container";
import ImgCard from "../../commons/ImgCard/ImgCard";
import Marker from "../../commons/Marker/Marker";
import Section from "../../commons/Section/Section"
import Title from "../../commons/Title/Title";
import { WIDTH } from "../../const/widthBreakpoint";
import { useDisplaySize } from "../../hooks/useDisplaySize";
import { useSEO } from "../../hooks/useSEO";
import { industries } from "../../mockups/industries";

const Industries: FC<{}> = () => {
    const { widthSize } = useDisplaySize();
    useSEO(`See how signedeal contributes
    to different Industries`, 'Signedeal | Industries');
    return (
        <Section>
            <Container>
                <Title styles={{ margin: widthSize > WIDTH ? `60px 0` : `30px 0 60px 0` }}>
                    See how signedeal contributes 
                    to <Marker>different Industries</Marker>
                </Title>
            </Container>
            { industries.map((product, idx) => 
            idx %2 === 0 ?
            <ImgCard
            item={product}
            />
            : 
            <ImgCard
            item={product}
            reverse={widthSize > WIDTH ? true : false}
            />
            )}
        </Section>
    )
};

export default Industries;