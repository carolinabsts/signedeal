import { FC } from "react";
import Container from "../../commons/Container/Container";
import ImgCard from "../../commons/ImgCard/ImgCard";
import Marker from "../../commons/Marker/Marker";
import Section from "../../commons/Section/Section"
import Title from "../../commons/Title/Title";
import { WIDTH } from "../../const/widthBreakpoint";
import { useDisplaySize } from "../../hooks/useDisplaySize";
import { useSEO } from "../../hooks/useSEO";
import { products } from "../../mockups/products";
import './Products.css';

const Products: FC<{}> = () => {
    const { widthSize } = useDisplaySize();
    useSEO(`Take a tour to see how Signedeal works`, 'Signedeal | Products');
    return (
        <Section>
            <Container>
                <Title styles={{ margin: widthSize > WIDTH ? `60px 0` : `30px 0` }}>
                    <Marker>Take a tour</Marker> to see how Signedeal works
                </Title>
            </Container>
            <div className="ProductsPage__imgContainer">
                { products.map((product, idx) => 
                idx %2 === 0 ?
                <ImgCard
                item={product}
                />
                : 
                <ImgCard
                item={product}
                reverse={widthSize > WIDTH ? true : false} />
                )}
            </div>
        </Section>
    )
};

export default Products;