import React from 'react';
import { NativeRouter, Route } from 'react-router-native';
import RouteController from './router.constants';

import Landing from '../screens/Landing';
import Auth from '../screens/Auth';
import Glossary from '../screens/GlossaryLanding';
import LocationShow from '../screens/LocationShow';

export default CustomRouter = (props) => {
    return (
        <NativeRouter>
            <Route exact path={RouteController.HOME} component={Landing} />
            <Route exact path={RouteController.AUTH} component={Auth} />
            <Route exact path={RouteController.GLOSSARY} component={Glossary} />
            <Route path={RouteController.LOCATION_SHOW} component={LocationShow} />
        </NativeRouter>
    )
}