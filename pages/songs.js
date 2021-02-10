import React from 'react';
import { SearchBar } from '../components/SearchBar';
import TutorialList from '../components/TutorialList';

const Songs = () => {
  return (
    <>
      <section className="container">
        <SearchBar />
      </section>
      <main className="container">
        <TutorialList />
      </main>
    </>
  );
};

export default Songs;
