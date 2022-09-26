import React from 'react';
import logo from './logo.svg';
import './styles/App.scss';
import { TopBarOne } from './TopBarOne';
import { TopBarTwo } from './TopBarTwo';
import { Hero } from './Hero';
import { CategoriesShop } from './CategoriesShop';
import { FlashSale } from './FlashSale';
import { GetInTouch } from './GetInTouch';
import { Achievement } from './Achievement';
function App() {
  return (
    <div className="App">
      <TopBarOne />
      <TopBarTwo />
      <Hero />
      <CategoriesShop />
      <FlashSale />
      <GetInTouch />
      <Achievement />
    </div>
  );
}

export default App;
