import { Button, Typography } from "@material-ui/core"
import { FC } from "react";
import { useHistory } from "react-router";
import { pathString } from "../../../commons/Router/pathString";
import Section from "../../../commons/Section/Section"

const FourthSection: FC<{}> = () => {
    const history = useHistory();
    return (
        <Section
        className="Landing__FourthSection--container"
        height={800}>
            <img src="https://i.ibb.co/n3NyzF2/undraw-team-work-k80m-1.png" alt=""/>
            <Typography 
            className="Landing__fourthSection--title"
            variant="h4">
                Start using Signedeal today
            </Typography>
            <Typography
            variant="h6"
            className="Landing__fourthSection--subtitle">
                Join our community and get the best negotiation execution
            </Typography>
            <Button
            onClick={() => history.push(pathString.contactUs)}
            variant="contained"
            color="primary">
                Get signedeal now
            </Button>
            <img 
            className="Landing__FourthSection--img"
            src="https://i.ibb.co/pwT0VYY/Group-7.png" alt=""/>
        </Section>
    )
};

export default FourthSection;