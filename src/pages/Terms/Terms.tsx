import { Typography } from '@material-ui/core';
import { FC } from 'react';
import Container from '../../commons/Container/Container';
import Marker from '../../commons/Marker/Marker';
import Section from '../../commons/Section/Section';
import Title from '../../commons/Title/Title';
import { WIDTH } from '../../const/widthBreakpoint';
import { useDisplaySize } from '../../hooks/useDisplaySize';
import { useSEO } from '../../hooks/useSEO';
import './Terms.css';

const Terms: FC<{}> = () => {
    const { widthSize } = useDisplaySize();
    useSEO('', 'Signedeal | Terms');
    return (
        <Section>
            <Container>
                <div className="TermsPage__container">
                    <Title
                    styles={{ margin: widthSize > WIDTH ? `60px 0 30px 0` : `30px 0` }}>
                        <Marker>Agreements and Terms</Marker>
                    </Title>
                    <Typography
                    className="TermsPage__subtitle"
                    >
                        Master Subscription Agreement
                    </Typography>
                    <a 
                    download
                    href="https://46e6bfdb-7080-499d-b097-e7ae9b39b632.filesusr.com/ugd/788db3_326992634bcb4286817a837b7e838b33.pdf"> 
                        Master Subscription  Agreement April 2021
                    </a>
                </div>
            </Container>
        </Section>
    )
}

export default Terms;