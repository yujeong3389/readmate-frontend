import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import S from './style';

const BookRecordPage = () => {
  return (
    <>
        <S.Background>
           <S.TitleHightlight>
              <img src={process.env.PUBLIC_URL + '/global/images/mylibrarypage/hightlight.png'}  alt="게시판"/>
            </S.TitleHightlight>
            <S.Line></S.Line>
            <S.BookCount>
              책 개수:11개
            </S.BookCount>
            <S.BookShelf>
              {/* <img src={process.env.PUBLIC_URL + '/global/images/mylibrarypage/bookShelf.png'}  alt="게시판"/> */}
              <S.BookComponent>안녕하세요</S.BookComponent>
            </S.BookShelf>

            <S.EssayTitleContainer>
              <S.TitleHightlight>
                <img id='essay' src={process.env.PUBLIC_URL + '/global/images/mylibrarypage/essayhightlight.png'}  alt="게시판"/>
              </S.TitleHightlight>  
              <S.WriteEssayButton>에세이 쓰기</S.WriteEssayButton>
            </S.EssayTitleContainer>
            
            <S.EssayBodyContainer>
              <S.Essay>
                <S.EssayItem></S.EssayItem>
              </S.Essay>
            </S.EssayBodyContainer>
        </S.Background>
    </>
  );
};

export default BookRecordPage;