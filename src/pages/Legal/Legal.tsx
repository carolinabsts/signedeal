import { FC } from 'react';
import { Link } from 'react-router-dom';
import Container from '../../commons/Container/Container';
import LittleParagraph from '../../commons/LittleParagraph/LittleParagraph';
import Marker from '../../commons/Marker/Marker';
import { pathString } from '../../commons/Router/pathString';
import Section from '../../commons/Section/Section';
import Title from '../../commons/Title/Title';
import { WIDTH } from '../../const/widthBreakpoint';
import { useDisplaySize } from '../../hooks/useDisplaySize';
import { useSEO } from '../../hooks/useSEO';
import { legal } from '../../mockups/legal';
import './Legal.css';

const Legal: FC<any> = () => {
    const { widthSize } = useDisplaySize();
    useSEO('', 'Signedeal | Legal');
    const links: any[] = [
        {
            link: 'Terms and conditions',
            path: pathString.terms
        },
        {
            link: 'Disclaimer',
            path: pathString.disclaimer
        }
    ];
    return (
        <Section>
            <Container>
                <Title
                styles={{ margin: widthSize > WIDTH ? `60px 0 20px 0` : `30px 0` }}>
                    <Marker>Legal</Marker>
                </Title>
                <div className="LegalPage__paragraphs--container">
                    { legal.map(leg => 
                        <LittleParagraph
                        key={leg.title}
                        title={leg.title}
                        paragraph={leg.paragraph}
                        />
                    )}
                </div>
                <div className="LegalPage__links--container">
                    <h4>
                        Links
                    </h4>
                    { links.map(l => 
                    <Link 
                    className="LegalPage__links--item"
                    to={l.path}>
                        {l.link}
                    </Link>
                    )}
                </div>
            </Container>
        </Section>
    )
};

export default Legal;