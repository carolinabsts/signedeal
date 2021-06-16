import { FC, lazy, Suspense } from "react";
import { 
    BrowserRouter as Router,
    Route, 
    Switch
} from "react-router-dom";
import PartnersContact from "../../pages/PartnersContact/PartnersContact";
import SignedealBackdrop from "../Backdrop/Backdrop";
import WebBar from '../WebBar/WebBar';
import { pathString } from "./pathString";

const Landing = lazy(() => 
import('../../pages/Landing/Landing'));
const Products = lazy(() => 
import('../../pages/Products/Products'));
const Industries = lazy(() => 
import('../../pages/Industries/Industries'));
const Resources = lazy(() => 
import('../../pages/Resources/Partners'));
const Company = lazy(() => 
import('../../pages/Company/Company'));
const ContactUs = lazy(() => 
import('../../pages/ContactUs/ContactUs'));
const Legal = lazy(() => 
import('../../pages/Legal/Legal'));
const Newsroom = lazy(() => 
import('../../pages/Newsroom/Newsroom'));
const Details = lazy(() => 
import('../../pages/Newsroom/Details/Details'));
const Disclaimer = lazy(() => 
import('../../pages/Disclaimer/Disclaimer'));
const Terms = lazy(() => 
import('../../pages/Terms/Terms'));
const Demos = lazy(() => 
import('../../pages/Demos/Demos'));

const RouterCenter: FC<{}> = () => {

    function renderLoading() {
        return <SignedealBackdrop isLoading={true}/>
    };
    
    return (
        <Router>
            <Suspense fallback={<div>{renderLoading()}</div>}>
                <WebBar>
                    <Switch>
                        <Route path={pathString.root} exact component={Landing} />
                        <Route path={pathString.products} exact component={Products} />
                        <Route path={pathString.industries} exact component={Industries} />
                        <Route path={pathString.resources} exact component={Resources} />
                        <Route path={pathString.company} exact component={Company} />
                        <Route path={pathString.contactUs} exact component={ContactUs} />
                        <Route path={pathString.partnersContact} exact component={PartnersContact} />
                        <Route path={pathString.legal} exact component={Legal} />
                        <Route path={pathString.newsroom} exact component={Newsroom} />
                        <Route path={pathString.details} exact component={Details} />
                        <Route path={pathString.disclaimer} exact component={Disclaimer} />
                        <Route path={pathString.terms} exact component={Terms} />
                        <Route path={pathString.demos} exact component={Demos} />
                    </Switch>
                </WebBar>
            </Suspense>
        </Router>
    )
};

export default RouterCenter;