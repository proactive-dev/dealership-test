import * as React from 'react';

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import { DealershipInventoryActivity } from './components/activities/DealershipInventoryActivity/DealershipInventoryActivity';
import { DealershipDetailActivity } from './components/activities/DealershipDetailActivity/DealershipDetailActivity';
import { ApolloProvider } from '@apollo/react-hooks';
import * as apolloService from 'services/apolloService';



export const App: React.FC = props => {
  return (
    <ApolloProvider client={apolloService.getClient()}>
      <BrowserRouter>
        <Switch>

          <Route
            exact
            path="/"
            component={DealershipInventoryActivity} />

          <Route
            exact
            path="/dealership/:id"
            component={DealershipDetailActivity} />

        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}
