import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { FC, useState } from "react";
import SignedealAlert from "../../commons/Alert/Alert";
import SignedealBackdrop from "../../commons/Backdrop/Backdrop";
import Container from "../../commons/Container/Container";
import Marker from "../../commons/Marker/Marker";
import Section from "../../commons/Section/Section"
import Title from "../../commons/Title/Title";
import { WIDTH } from "../../const/widthBreakpoint";
import { sendMail } from "../../hooks/sendEmail";
import { useDisplaySize } from "../../hooks/useDisplaySize";
import { useSEO } from "../../hooks/useSEO";
import './ContactUs.css';

const Company: FC<{}> = () => {

    useSEO(`Learn how you can convert business opportunities 
    into smart deals with an automatic negotiation framework.`, 'Signedeal | Contact')

    const { widthSize } = useDisplaySize();
    const [ name, setName ] = useState<string>('');
    const [ lastName, setLastName ] = useState<string>('');
    const [ email, setEmail ] = useState<string>('');
    const [ phone, setPhone ] = useState<number | undefined>(undefined);
    const [ company, setCompany ] = useState<string>('');
    const [ message, setMessage ] = useState<string>('');
    const [ loading, setLoading ] = useState<boolean>(false);
    const [ open, setOpen ] = useState<boolean>(false);
    const [ alertMsg, setAlertMsg ] = useState<string>('');

    function send() {
        if (
        name &&
        lastName &&
        email &&
        phone &&
        company &&
        message
        ) {
            setLoading(true);
            sendMail({
                name,
                lastName,
                email,
                phone,
                company,
                message
            });

            setTimeout(() => {
                setLoading(false);
                setOpen(true);
                setAlertMsg('Message sent succesfully!');
                setName('');
                setLastName('');
                setEmail('');
                setPhone(undefined);
                setCompany('');
                setMessage('');
            }, 500);
        }
    };
    function isDisabled() {
        if (!name || 
        !lastName ||
        !email ||
        !phone ||
        !company ||
        !message) {
            return true;
        } else return false;
    };

    return (
        <Section>
            <Container>
                <Title 
                styles={{ margin: widthSize > WIDTH ? `60px 0 20px 0` : `30px 0` }}>
                    Have a Signedeal Expert <Marker>Contact Me</Marker>
                </Title>
                <Typography 
                className="ContactUsDescription__subtitle">
                    Learn how you can convert business opportunities 
                    into smart deals with an automatic negotiation framework.
                </Typography>
                <Typography 
                className="ContactUsSubtitle__subtitle"
                variant="h3">
                    Contact Us
                </Typography>
                <Grid 
                container
                className="ContactUs__card">
                    <SignedealAlert
                    open={open}
                    setOpen={setOpen}
                    message={alertMsg}
                    />
                    <Grid container xs={12}>
                        <Grid xs={widthSize > WIDTH ? 6 : 12}>
                            <TextField 
                            required
                            value={name}
                            onChange={(e) => 
                                setName(e.target.value)}
                            className="ContactUs__card--item"
                            id="first-name"
                            label="First name" 
                            variant="outlined" />
                        </Grid>
                        <Grid xs={widthSize > WIDTH ? 6 : 12}>
                            <TextField 
                            required
                            value={lastName}
                            onChange={(e) => 
                                setLastName(e.target.value)}
                            className="ContactUs__card--item"
                            id="last-name"
                            label="Last name" 
                            variant="outlined" />
                        </Grid>
                    </Grid>
                    <Grid container xs={12}>
                        <Grid xs={widthSize > WIDTH ? 6 : 12}>
                            <TextField 
                            required
                            value={email}
                            onChange={(e) => 
                                setEmail(e.target.value)}
                            className="ContactUs__card--item"
                            id="email"
                            type="email"
                            label="Email" 
                            variant="outlined" />
                        </Grid>
                        <Grid xs={widthSize > WIDTH ? 6 : 12}>
                            <TextField 
                            required
                            className="ContactUs__card--item"
                            id="phone"
                            value={phone}
                            onChange={(e: any) => 
                                setPhone(e.target.value)}
                            type="number"
                            label="Phone" 
                            variant="outlined" />
                        </Grid>
                    </Grid>
                    <TextField 
                    required
                    className="ContactUs__card--item--display"
                    id="company"
                    value={company}
                    onChange={(e) => 
                        setCompany(e.target.value)}
                    label="Company" 
                    variant="outlined" />
                    <TextField 
                    required
                    value={message}
                    onChange={(e) => 
                        setMessage(e.target.value)}
                    multiline
                    className="ContactUs__card--item--display"
                    id="message"
                    label="How can we help you?" 
                    variant="outlined" />
                    <div className="ContactUs__button">
                        <Button
                        disabled={isDisabled()}
                        onClick={() => send()}
                        variant="contained"
                        color="primary"
                        >
                            Submit
                        </Button>
                    </div>
                </Grid>
            </Container>
            <SignedealBackdrop isLoading={loading}/>
        </Section>
    )
};

export default Company;