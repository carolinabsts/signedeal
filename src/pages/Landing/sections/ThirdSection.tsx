import { Grid } from "@material-ui/core";
import Container from "../../../commons/Container/Container";
import Section from "../../../commons/Section/Section";
import Item from "../components/Item";
import { useDisplaySize } from "../../../hooks/useDisplaySize";
import { WIDTH } from "../../../const/widthBreakpoint";
import { FC } from "react";

interface ThirdSectionProps {
    data: any[];
}

const ThirdSection: FC<ThirdSectionProps> = ({
    data
}) => {
    const { widthSize } = useDisplaySize();
    return (
        <Section
        className="Landing__thirdSection--container">
            <Container>
                <Grid container spacing={widthSize > WIDTH ? 3 : 0}>
                    { data.map((item, idx)=> 
                    <Item
                    title={item.title}
                    description={item.description}
                    withCSS={widthSize > WIDTH 
                        ? idx !== 2 ? true : false 
                        : false} />
                    )}
                </Grid>
            </Container>
            { widthSize > WIDTH &&
            <img src="https://i.ibb.co/QCNNNnR/Group-6.png" alt=""/> }
        </Section>
    )
};

export default ThirdSection;