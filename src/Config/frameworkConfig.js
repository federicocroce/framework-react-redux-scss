import React from 'react';

import Index from '../Components/Sections/Index';

import actions from "../Actions/indexActions";
import components from "../Components/indexComponents";
import config from "./indexConfig";
import functions from "./indexFunctions";


const frameworkConfig = props => {
    
    Object.assign(React, {
        functions : functions,
        config: config,
        components : components,
        actions: actions        
    });
}

export default frameworkConfig;


