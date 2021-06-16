import { Grid, Typography } from "@material-ui/core";
import { FC } from "react";
import { WIDTH } from "../../../const/widthBreakpoint";
import { useDisplaySize } from "../../../hooks/useDisplaySize";
import '../Landing.css';

interface ItemProps {
    title: string;
    description: string;
    withCSS: boolean;
};

const Item: FC<ItemProps> = ({
    title,
    description,
    withCSS
}) => {
    const { widthSize } = useDisplaySize();
    return (
        <Grid 
        style={{
            marginBottom: widthSize > WIDTH ? 0 : 30
        }}
        item 
        xs={widthSize > WIDTH ? 4 : 10}>
            <div className={ withCSS ? `Landing__thirdSection--card` : '' }>
                <Typography
                className="Landing__subtitle--secondSection"
                variant="h6">
                    <b>
                    { title }
                    </b>
                </Typography>
                <Typography 
                className="Landing__subtitle--secondSection"
                variant="h6"><b>-</b></Typography>
                <Typography
                className="Landing__subtitle--secondSection">
                    { description }
                </Typography>
            </div>
        </Grid>
    )
};

export default Item;