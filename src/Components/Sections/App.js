import React, {components, config} from 'react';
// import  from 'react';

import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { Switch, Route, NavLink } from 'react-router-dom';

const App = () => {

  return (
    <Provider store={config.storeHistory.store}>
      <ConnectedRouter history={config.storeHistory.history}>
          <components.Test />
      </ConnectedRouter>
    </Provider>
  )
}

export default App;
