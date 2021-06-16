import { Grid, Typography } from "@material-ui/core"
import { FC, ReactNode, useEffect, useState } from "react"
import { useLocation } from "react-router";
import { WIDTH } from "../../const/widthBreakpoint";
import { useDisplaySize } from "../../hooks/useDisplaySize";
import { pathString } from "../Router/pathString";
import Title from "../Title/Title";
import './ImgCard.css';

interface ImgCardProps {
    reverse?: boolean;
    item: any;
    children?: ReactNode
}

const ImgCard: FC<ImgCardProps> = ({
    reverse,
    item,
    children
}) => {
    const { widthSize } = useDisplaySize();
    const match = useLocation();
    const [changeWidth, setChangeWidth] = useState<boolean>(false);

    useEffect(() => {
        document.title = "Signedeal - Covid-19"
    }, []);

    useEffect(() => {
        if (match) {
            switch (match.pathname) {
                case pathString.partnersContact:
                    setChangeWidth(true);
                break;
                default:
                    setChangeWidth(false);
            }
        }
    }, [match]);

    return (
        <Grid
        className={`ImgCard__container ${reverse ? '--reverse' : ''}`}
        spacing={widthSize > WIDTH ? 2 : 1}>
            <Grid
            style={{ padding: 0, height: widthSize > WIDTH ? 400 : '100%' }}
            item 
            xs={widthSize > WIDTH ? 6 : 12}>
                <div className="ImgCard__img">
                    <img 
                    className={changeWidth ? "changeWidth__active" : ""}
                    src={item.img} alt="img"/>
                </div>
            </Grid>
            <Grid
            style={{ padding: 0, height: widthSize > WIDTH ? 400 : '100%' }}
            item 
            xs={widthSize > WIDTH ? 6 : 12}>
                <div className={`ImgCard__square ${reverse ? '--label-reverse' : ''}`}>
                    <Title 
                    subtitleProps
                    reverse={reverse ? reverse : false}>
                        {item.title}
                    </Title>
                    <Typography 
                        className="ImgCard__description">
                        <ul>
                        { item.description.map((d: any) => 
                            <li>{d}</li>
                        )}
                        </ul> 
                    </Typography>
                    {children}
                </div>
            </Grid>
        </Grid>
    )
};

export default ImgCard;