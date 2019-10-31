import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import PhoneBookList from './components/PhoneBookList';
import AddToPhoneBook from './components/AddToPhoneBook';

export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
        <Route path='/phonebook' component={PhoneBookList} />
        <Route path='/add' component={AddToPhoneBook} />
  </Layout>
);
