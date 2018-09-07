import React from 'react';
import { Provider } from 'react-redux';
import { Container } from 'reactstrap';
import store from './store';
import CardList from './components/CardList';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import PaginationNew from './components/PaginationNew';

const App = () => (
  <Provider store={store}>
    <Container>
      <Header name="Pokemon List" />
      <CardList />
      <PaginationNew />
    </Container>
  </Provider>
);

export default App;
