import React from 'react';
import { Provider } from 'react-redux';
import { Container } from 'reactstrap';
import store from './store';
import CardList from './components/CardList';
import Header from './components/Header';
import Pagination from './components/Pagination';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
    <Provider store={store}>
      <Container>
        <Header name="Pokemon List" />
        <CardList />
        <Pagination />
      </Container>
    </Provider>
);

export default App;
