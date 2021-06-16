import { FC } from "react";
import Container from "../../commons/Container/Container";
import Section from "../../commons/Section/Section"
import Title from "../../commons/Title/Title";
import VideoCard from "../../commons/VideoCard/VideoCard";
import { WIDTH } from "../../const/widthBreakpoint";
import { useDisplaySize } from "../../hooks/useDisplaySize";
import { useSEO } from "../../hooks/useSEO";
import { covid } from "../../mockups/covid";

const Covid: FC<{}> = () => {
    const { widthSize } = useDisplaySize();
    useSEO(`See how signedeal supports COVID-19`, 'Signedeal | Covid-19');
    return (
        <Section>
            <Container>
                <Title styles={{ margin: widthSize > WIDTH ? `60px 0` : `30px 0` }}>
                    See how signedeal supports COVID-19
                </Title>
                { covid.map(product => 
                <VideoCard
                width={500}
                key={product.title}
                item={product}
                /> )}
            </Container>
        </Section>
    )
};

export default Covid;