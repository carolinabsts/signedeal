import { FC, ReactNode, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { HideOnScroll } from './components/HideOnScroll';
import { ScrollTop } from './components/ScrollTop';
import { Link, useHistory } from 'react-router-dom';
import './WebBar.css';
import Footer from '../Footer/Footer';
import { slide as Menu } from 'react-burger-menu'
import { useDisplaySize } from '../../hooks/useDisplaySize';
import { WIDTH } from '../../const/widthBreakpoint';
import { pathString } from '../Router/pathString';
import WebBarSelect from '../WebBarSelect/WebBarSelect';

interface WebBarProps {
    children: ReactNode
};

const WebBar: FC<WebBarProps> = (props) => {
  const history = useHistory();
  const { widthSize } = useDisplaySize();
  const links: any[] = [
    {
      link: 'Products',
      path: pathString.products
    },
    {
      link: 'Industries',
      path: pathString.industries
    },
    {
      link: 'Resources',
      path: pathString.resources
    },
    {
      link: 'Covid-19',
      path: pathString.covid
    },
    {
      link: 'Company',
      path: pathString.company
    },
    {
      link: 'Partners',
      path: pathString.partnersContact
    },
    {
      link: 'Contact',
      path: pathString.contactUs
    }
  ];

  const [ sideMenuIsOpen, setSideMenuIsOpen ] = useState<boolean>(false);

  return (
    <>
      <CssBaseline />
        <HideOnScroll {...props}>
          <AppBar className="WebBar__appBar">
              <Toolbar className="webBar__toolBar">
                { widthSize > WIDTH ?
                <>
                <img 
                onClick={() => history.push('/')}
                src="https://i.ibb.co/rG6WH6K/logofondooscuro.png" 
                alt="logofondooscuro"/>
                { links.map((l, idx) => 
                  l.link === 'Resources' ?
                  <WebBarSelect
                  setSideMenuIsOpen={setSideMenuIsOpen}/>
                  :
                  <Link
                  className="WebBar__link"
                  to={l.path}
                  key={`${idx}-${l.link}`}>
                    { l.link }
                  </Link>
                )}
                <a href="https://signedeal.com/demoApp/Debtor">
                  Login
                </a>
                </> : 
                <Menu 
                onOpen={() => setSideMenuIsOpen(true)}
                id={ "sidebar" } 
                className="my-menu"
                isOpen={sideMenuIsOpen}> 
                  <img 
                  onClick={() => {
                    history.push('/');
                    setSideMenuIsOpen(false)
                  }}
                  src="https://i.ibb.co/rG6WH6K/logofondooscuro.png" 
                  alt="logofondooscuro"/>
                  { links.map((l, idx) => 
                    l.link === 'Resources' ?
                    <WebBarSelect
                    setSideMenuIsOpen={setSideMenuIsOpen}
                    />
                    :
                    <Link
                    onClick={() => setSideMenuIsOpen(false)}
                    className="WebBar__link"
                    to={l.path}
                    key={idx}>
                      { l.link }
                    </Link>
                    )}
                    <a 
                    className="WebBar__link"
                    href="https://signedeal.com/demoApp/Debtor">
                      Login
                    </a>
                </Menu>
                }
              </Toolbar>
          </AppBar>
        </HideOnScroll>
      <Toolbar id="back-to-top-anchor" />
      { props.children }
      <Footer/>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}

export default WebBar;