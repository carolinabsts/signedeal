import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { FC, useState } from "react";
import SignedealAlert from "../../commons/Alert/Alert";
import SignedealBackdrop from "../../commons/Backdrop/Backdrop";
import Container from "../../commons/Container/Container";
import ImgCard from "../../commons/ImgCard/ImgCard";
import Marker from "../../commons/Marker/Marker";
import Section from "../../commons/Section/Section"
import Title from "../../commons/Title/Title";
import { WIDTH } from "../../const/widthBreakpoint";
import { sendMail } from "../../hooks/sendEmail";
import { useDisplaySize } from "../../hooks/useDisplaySize";
import { useSEO } from "../../hooks/useSEO";
import { partnersContact } from "../../mockups/partnersContact";
import './PartnersContact.css';

const Company: FC<{}> = () => {
    const { widthSize } = useDisplaySize();
    useSEO(`Would you like to join Signedeal as a partner?`, 'Signedeal | Partners');

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
        <>
        <Section>
            <Container>
                <Title styles={{ margin: widthSize > WIDTH ? `60px 0` : `30px 0` }}>
                    Signedeal for <Marker>Celonis</Marker>
                </Title>
                { partnersContact.map(product => 
                <ImgCard
                key={product.title}
                item={product}> 
                    <div className="PartnersContact__button--watchDemo">
                        { // eslint-disable-next-line react/jsx-no-target-blank 
                        <a 
                        target="_blank"
                        href="https://www.celonis.com/ems/apps/procurement/?modalId=6upUOv8UnaenpMY3FxQWWN">
                        <Button
                         variant="contained"
                         color="primary">Watch demo</Button>
                        </a> }
                    </div>
                </ImgCard>
                )}
            </Container>
        </Section>
        <Section>
            <Container>
                <Title 
                styles={{ margin: widthSize > WIDTH ? `60px 0 20px 0` : `0 0 20px 0` }}>
                    Partners?
                </Title>
                <Typography 
                className="PartnersContactDescription__subtitle">
                    Would you like to join Signedeal as a partner? Please send us your contact information.
                </Typography>
                <Grid 
                container
                className="PartnersContact__card">
                    <SignedealAlert
                    open={open}
                    setOpen={setOpen}
                    message={alertMsg}
                    />
                    <Grid 
                    className="PartnersContact__card--subsection">
                        <TextField 
                        required
                        className="PartnersContact__card--item"
                        id="name"
                        value={name}
                        onChange={(e) => 
                        setName(e.target.value)}
                        label="First name" 
                        variant="outlined" />
                        <TextField 
                        required
                        className="PartnersContact__card--item"
                        id="lastname"
                        value={lastName}
                        onChange={(e) => 
                        setLastName(e.target.value)}
                        label="Last name" 
                        variant="outlined" />
                    </Grid>
                    <Grid
                    className="PartnersContact__card--subsection">
                        <TextField 
                        required
                        className="PartnersContact__card--item"
                        value={email}
                        onChange={(e) => 
                        setEmail(e.target.value)}
                        id="email"
                        label="Email" 
                        variant="outlined" />
                        <TextField 
                        required
                        className="PartnersContact__card--item"
                        id="phone"
                        value={phone}
                        onChange={(e: any) => 
                            setPhone(e.target.value)}
                        label="Phone" 
                        variant="outlined" />
                    </Grid>
                    <TextField 
                    required
                    className="PartnersContact__card--item--display"
                    value={company}
                    onChange={(e:any) => 
                    setCompany(e.target.value)}
                    id="company"
                    label="Company" 
                    variant="outlined" />
                    <TextField 
                    required
                    value={message}
                    multiline
                    onChange={(e: any) => 
                        setMessage(e.target.value)}
                    className="PartnersContact__card--item--display"
                    id="message"
                    label="How can we help you?" 
                    variant="outlined" />
                    <div className="PartnersContact__button">
                        <Button
                        onClick={() => send()}
                        disabled={isDisabled()}
                        variant="contained"
                        color="primary"
                        >
                            Submit
                        </Button>
                    </div>
                </Grid>
                <img 
                className="PartnersContact__img--img"
                src="https://i.ibb.co/fHvLzPd/undraw-contact-us-15o2-1.png" alt=""/>
            </Container>
            <SignedealBackdrop isLoading={loading}/>
        </Section>
        </>
    )
};

export default Company;