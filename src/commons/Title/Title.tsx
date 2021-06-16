import { Typography } from "@material-ui/core";
import { FC, ReactNode } from "react";
import './Title.css';

interface TitleProps {
    children: ReactNode,
    styles?: any;
    reverse?: boolean;
    subtitleProps?: boolean;
}

const Title: FC<TitleProps> = ({
    children,
    styles,
    reverse,
    subtitleProps
}) => {
    return (
        <Typography 
        style={styles}
        className={`
        TitleProps__container 
        ${subtitleProps ? '--subtitleProps' : ''}
        ${reverse ? '--reverse' : ''}`}
        variant="h4">
            <b>{children}</b>
        </Typography>
    )
};

export default Title;