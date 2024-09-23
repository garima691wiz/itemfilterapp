import React from 'react';
import ItemList from './components/ItemList';
import SearchBar from './components/SearchBar';

const App = () => {


  return (
    <div className="App">
      <h1>Item List</h1>
      <SearchBar />
      <ItemList />
    </div>
  );
};

export default App;
