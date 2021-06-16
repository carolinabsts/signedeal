import { Typography } from "@material-ui/core";
import { FC, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HEIGHT, WIDTH } from "../../const/widthBreakpoint";
import { useDisplaySize } from "../../hooks/useDisplaySize";
import { pathString } from "../Router/pathString";
import facebook from '../../assets/Facebook.svg';
import linkedin from '../../assets/LinkedIn.svg';
import twitter from '../../assets/Twitter.svg';
import instagram from '../../assets/Instagram.svg';
import './Footer.css';

const Footer: FC<{}> = () => {

    const match = useLocation();
    const [ fixed, setFixed ] = useState<boolean>(false);
    const { heightSize, widthSize } = useDisplaySize();

    useEffect(() => {
        if (match && heightSize) {
            switch (match.pathname) {
                case pathString.legal:
                    if (heightSize < HEIGHT) {
                        if (widthSize > WIDTH) {
                            setFixed(true);
                        } else {
                            setFixed(false)
                        }
                    } else {
                        if (widthSize > WIDTH) {
                            setFixed(true);
                        } else {
                            setFixed(false)
                        }
                    }
                break;
                case pathString.demos:
                    if (heightSize < HEIGHT) {
                        if (widthSize > WIDTH) {
                            setFixed(true);
                        } else {
                            setFixed(false)
                        }
                    } else {
                        if (widthSize > WIDTH) {
                            setFixed(true);
                        } else {
                            setFixed(false)
                        }
                    }
                break;
                case pathString.newsroom:
                    if (heightSize < HEIGHT) {
                        if (widthSize > WIDTH) {
                            setFixed(true);
                        } else {
                            setFixed(false)
                        }
                    } else {
                        if (widthSize > WIDTH) {
                            setFixed(true);
                        } else {
                            setFixed(false)
                        }
                    }
                break;
                case pathString.terms:
                   setFixed(true);
                break;
                default:
                    setFixed(false);
            }
        }
    }, [match, heightSize, widthSize]);

    const links: any[] = [
        {
          link: 'Newsroom',
          path: pathString.newsroom
        },
        {
          link: 'Legal',
          path: pathString.legal
        },
        {
          link: 'Disclaimer',
          path: pathString.disclaimer
        }
    ];

    return (
        <footer 
        style={{ position: fixed ? "fixed" : "static" }}
        className={`Footer__container ${'--fixed'}`}>
            <div className="Footer__links--container">
                { links.map(link => 
                 <Link 
                 key={link.link}
                 className="footerWeb__link"
                 to={link.path}>
                    { link.link }
                 </Link>
                )}
            </div>
           <div className="Footer__socialMedia--container">
                <Typography>
                    <b>@ 2021 Signedeal</b>
                </Typography> 
               <div className="Footer__logos--styles">
                    <a href="https://www.linkedin.com/company/singedeal/"><img src={linkedin} alt="linkedIn"/></a>
                    <a href="https://www.facebook.com/signedeal"><img src={facebook} alt="facebook"/></a>
                    <a href="https://twitter.com/signedeal"><img src={twitter} alt="twitter"/></a>
                    <a href="https://www.instagram.com/signedeal/"><img src={instagram} alt="instagram"/></a>
               </div>
           </div>
        </footer>
    )
};

export default Footer;