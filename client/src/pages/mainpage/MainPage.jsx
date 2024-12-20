import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainSlider from './Slider';
import FeaturedBooksContainer from './FeaturedBooksContainer';
import BookClubContainer from './BookClub/BookClubContainer';
import HotPostContainer from './HotPost/HotPostContainer';
import S from './style';

const MainPage = () => {

  return (
    <div>
      
      <MainSlider/>
      <FeaturedBooksContainer/>
      <BookClubContainer/>
      <HotPostContainer/>
      
      
    </div>
  );
};

export default MainPage;
