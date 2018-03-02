import React, { Component } from 'react';
import BookList from '../containers/book_list';
import BookDetails from '../container/book_detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
