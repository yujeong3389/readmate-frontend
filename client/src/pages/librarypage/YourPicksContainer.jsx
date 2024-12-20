import React from 'react';
import { Link } from 'react-router-dom';
import S from './style';
import useBooksFetch from '../../hooks/Aladin/useBooksFetch';

const YourPicksContainer = ({ categoryId1 = 1230, categoryId2 = 1108 }) => {
    const { books: booksCategory1, isLoading: isLoading1, error: error1 } = useBooksFetch('BestSeller', categoryId1, 2); // 최대 2개의 아이템만 가져옴
    const { books: booksCategory2, isLoading: isLoading2, error: error2 } = useBooksFetch('BestSeller', categoryId2, 2); // 최대 2개의 아이템만 가져옴

    if (isLoading1 || isLoading2) return <p>Loading...</p>;
    if (error1 || error2) return <p>{error1 || error2}</p>;

    const renderBooks = (books) => {
        return books.map((book, index) => {
            const { isbn13, cover, title, author, categoryName, description } = book;

            const allowedCategories = ['고등학교참고서', '고전', '과학', '금강산 여행 가는 이에게', '달력/기타', '대학교재/전문서적', '만화', '사회과학',
                '소설/시/희곡', '수험서/자격증', '어린이', '에세이', '여행', '역사', '예술/대중문화', '외국어', '유아', '인문학', '일본 도서', 
                '자기계발', '잡지', '장르소설', '전집/중고전집', '종교/역학', '좋은부모', '중학교참고서', '청소년', '청소년_추천도서', '초등학교참고서', 
                '컴퓨터/모바일', 'Gift', '가요', '국악', '상품권', '오디오파일', '월드뮤직', '재즈', '종교/명상/기타', '증정용 음악상품권', '클래식', 
                '팝', '해외구매', 'J-Pop', 'LP', 'O.S.T.', '고전/명작', '공포/스릴러', '교양/다큐멘터리', '교육용 S/W', '드라마/코미디', 
                '박스세트', '블루레이', '성인', '애니메이션', '액션/어드벤처', '유아/아동', '음악DVD', '제작국가별', '취미/스포츠', 'S.F/판타지', 
                'TV 시리즈', 'VCD', 'VHS (비디오테이프)', '가정/원예/인테리어', '가족/관계', '건강/스포츠', '건축/디자인', '게임/토이', 
                '공예/취미/수집', '교육/자료', '기술공학', '기타', '기타 언어권 도서', '달력/다이어리/연감', '대만도서', '대학교재', 
                '독일 도서', '문구/비도서', '법률', '수험서', '스페인 도서', '언어학', '오디오북', '요리', '유머', '의학', '인문/사회', 
                '자연과학', '전기/자서전', '종교/명상/점술', '중국 도서', '컴퓨터', '한국관련도서', '해외잡지', 'ELT/어학/사전', '19+', 
                '가격대별 eBook', '구텐베르크 원서', '라이트 노벨', '로맨스', '사전/기타', '알라딘오디오북', '인물/평전', '중고등참고서', 
                '초등참고서', '판타지/무협', '해외도서', 'BL'];

            const categories = categoryName ? Array.from(new Set(categoryName.split(/>|\s+/).filter(category => allowedCategories.includes(category)))) : [];

            return (
                <S.BookSection key={index} className="yourPicks">
                  <S.ImageSection className='yourPicks'>
                    <Link to={`/books/bookinfo/${isbn13}`}>
                        
                        <S.BookImage className='yourPicks'
                            src={cover}
                            alt={title}
                            onError={(e) => {
                                e.target.src = '/placeholder-book.png'; // Placeholder image
                            }}
                        />
                      </Link>
                      </S.ImageSection>  
                        <S.BookContent>
                            <h3>{title}</h3>
                            <h3>{description}</h3>
                            <p>{author}</p>
                            {categories.map((category, idx) => (
                                <h5 key={idx}>{category}</h5>
                            ))}
                        </S.BookContent>
                   
                    
                </S.BookSection>
            );
        });
    };

    return (
        <div>
            <S.Container className='yourPicks'>
                <S.TitleHighlight>
                    <img src={process.env.PUBLIC_URL + '/global/images/librarypage/yourPicks.png'} alt="Library Board" />
                </S.TitleHighlight>
                <S.BookListContainer className='yourPicks'>
                <S.YourPicksContainer>
                    {renderBooks(booksCategory1)}
                </S.YourPicksContainer>
                <S.YourPicksContainer>   
                    {renderBooks(booksCategory2)}
                </S.YourPicksContainer>
                </S.BookListContainer>
            </S.Container>
             
        </div>
    );
};

export default YourPicksContainer;
