import React from 'react';
import { useParams, useNavigate, Outlet } from 'react-router-dom';
import S from './style'


const BookClubListContainer = () => {

return(
        <S.Container className='lightGreenBg'>
            <S.Top >모집 중인 북클럽</S.Top>
            <S.CardSection >
                {[
                    { 
                        title: "Current Read", 
                        text: "Join us in reading 'The Great Gatsby' by F. Scott Fitzgerald. Our discussion starts next week!" ,
                        imageUrl: ["/global/images/bookclubpage/bookcover1.png",
                                    "/global/images/bookclubpage/bookcover1.png",
                                    "/global/images/bookclubpage/bookcover1.png",

                        ]
                    },
                    { 
                        title: "Current Read", 
                        text: "Join us in reading 'The Great Gatsby' by F. Scott Fitzgerald. Our discussion starts next week!" ,
                        imageUrl: ["/global/images/bookclubpage/bookcover1.png",
                                    "/global/images/bookclubpage/bookcover1.png",
                                    "/global/images/bookclubpage/bookcover1.png",

                        ]
                    },
                    { 
                        title: "Current Read", 
                        text: "Join us in reading 'The Great Gatsby' by F. Scott Fitzgerald. Our discussion starts next week!" ,
                        imageUrl: ["/global/images/bookclubpage/bookcover1.png",
                                    "/global/images/bookclubpage/bookcover1.png",
                                    "/global/images/bookclubpage/bookcover1.png",

                        ]
                    },
                    ].map((card, index) => (
                        <S.Card key={index}>
                            <S.ImageSection className='type2'>
                        
                          {card.imageUrl.map((image, imgIndex) => (
                            
                            <img 
                              key={imgIndex}
                              src={process.env.PUBLIC_URL + image} 
                              alt={`${card.title} - Image ${imgIndex + 1}`}
                              
                            />
                          ))}
                            </S.ImageSection>
                        <div>
                        <h2>{card.title}</h2>
                        <p>{card.text}</p>
                        <a href="#!">Learn More</a>
                        </div>    
                      </S.Card>
                          
            ))}
            </S.CardSection>
        </S.Container>
    );
};

export default BookClubListContainer;