import { FC } from "react";
import FirstSection from "./sections/FirstSection";
import SecondSection from "./sections/SecondSection";
import ThirdSection from "./sections/ThirdSection";
import './Landing.css';
import FourthSection from "./sections/FourthSection";
import { landing } from '../../mockups/landing';
import { useSEO } from "../../hooks/useSEO";

const Landing: FC<{}> = () => {
    useSEO(`Turning business opportunities into smart deals`, 'Signedeal');
    return (
        <>
            <FirstSection/>
            <SecondSection/>
            <ThirdSection data={landing.thirdSection}/>
            <FourthSection/>
        </>
    )
};

export default Landing;