import React, { useState } from 'react';
import "./Home.css"
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodeDisplay from '../../components/FoodDisplay/FoodeDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';

function Home() {
  const [category,SetCategory]=useState("All");
  return (
    <>
    <Header/>
    <ExploreMenu category={category} SetCategory={SetCategory}/>
    <FoodeDisplay category={category}/>
    <AppDownload/>
    </>
  )
}

export default Home