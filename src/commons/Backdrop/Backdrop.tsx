import { Backdrop, CircularProgress, makeStyles } from '@material-ui/core';
import { FC } from 'react';

interface SignedealBackdropProps {
    isLoading: boolean;
};

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
}));

const SignedealBackdrop: FC<SignedealBackdropProps> = ({
    isLoading
}) => {
    const classes = useStyles();
    return (
        <Backdrop className={classes.backdrop} open={isLoading}>
            <CircularProgress color="inherit" />
        </Backdrop>
    )
};

export default SignedealBackdrop;