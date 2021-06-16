import { Grid, Typography } from "@material-ui/core"
import { FC, ReactNode } from "react"
import { WIDTH } from "../../const/widthBreakpoint";
import { useDisplaySize } from "../../hooks/useDisplaySize";
import Title from "../Title/Title";
import '../ImgCard/ImgCard.css';
import './VideoCard.css';

interface VideoCardProps {
    reverse?: boolean;
    item: any;
    width?: number;
    children?: ReactNode
}

const VideoCard: FC<VideoCardProps> = ({
    reverse,
    item,
    width,
    children
}) => {
    const { widthSize } = useDisplaySize();
    return (
        <Grid
        className={`VideoCard__container ${reverse ? '--reverse' : ''}`}
        spacing={widthSize > WIDTH ? 2 : 1}>
            <Grid
            style={{ padding: 0, height: widthSize > WIDTH ? width : 250 }}
            item 
            xs={widthSize > WIDTH ? 6 : 12}>
                <div className="VideoCard__video">
                    <iframe
                    width={`100%`}
                    height={ widthSize > WIDTH ? width : 200}
                    title={item.title}
                    src={item.video}/>
                </div>
            </Grid>
            <Grid
            style={{ padding: 0, height: widthSize > WIDTH ? width : 250 }}
            item 
            xs={widthSize > WIDTH ? 6 : 12}>
                <div className={`VideoCard__square --less-margin ${reverse ? '--label-reverse' : ''}`}>
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
                    { children }
                </div>
            </Grid>
        </Grid>
    )
};

export default VideoCard;