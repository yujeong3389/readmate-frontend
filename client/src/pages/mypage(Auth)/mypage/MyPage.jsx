import React, { useState } from 'react';
import { useParams, useNavigate, Outlet, Link } from 'react-router-dom';
import S from './style';
import DeleteAccount from './DeleteAccount';

const MyPage = () => {
  
  const navigate=useNavigate();
  const [showDeleteAccount, setShowDeleteAccount] = useState(false);

  const goToUpdateProfile=()=>{
    navigate('/mypage/updateprofile');
  }

  const goToBookCalendar=()=>{
    navigate('/bookcalendar');
  }

  const goToMyLibrary=()=>{
    navigate('/myLibrary');
  }

  const handleDeleteClick = () => {
    setShowDeleteAccount(true); // 탈퇴하기 버튼 클릭 시 DeleteAccount 컴포넌트를 보여줌
  };

  const handleCancelClick = () => {
    setShowDeleteAccount(false); // 취소 버튼 클릭 시 DeleteAccount 컴포넌트를 숨김
  };

  return (
    <div>
      <S.Background >
        <S.Component>
          <S.Profile>
            <img src={process.env.PUBLIC_URL + '/global/images/mypage/defaultProfile.png'}/>
          </S.Profile>
          
          <S.NickNameContainer>
            <S.NickName>닉네임</S.NickName>
            <S.ModifyButton onClick={goToUpdateProfile}>수정하기</S.ModifyButton>
          </S.NickNameContainer>
          <S.Introduce>한 줄 소개 안녕하세요.</S.Introduce>
          
          <S.ImageContainer>
            <S.IconWrapper onClick={goToMyLibrary}>
              <img src={process.env.PUBLIC_URL + '/global/images/mypage/myLibrary.png'}/>
              <S.ImageTitle>내 서재</S.ImageTitle>
              <S.ImageCount>3</S.ImageCount>
            </S.IconWrapper>
            <S.IconWrapper>
              <img className='myClub' src={process.env.PUBLIC_URL + '/global/images/mypage/myClub.png'}/>
              <S.ImageTitle>내 클럽</S.ImageTitle>
              <S.ImageCount>3</S.ImageCount>
            </S.IconWrapper>
            <S.IconWrapper onClick={goToBookCalendar}>
              <img src={process.env.PUBLIC_URL + '/global/images/mypage/bookCalendar.png'}/>
              <S.ImageTitle >북 캘린더</S.ImageTitle>
              <S.ImageCount>3</S.ImageCount>
            </S.IconWrapper>
          </S.ImageContainer>
          <S.ButtonContainer>
            <S.Button>로그아웃</S.Button>
            <S.Button onClick={handleDeleteClick}>탈퇴하기</S.Button>
          </S.ButtonContainer>
          {showDeleteAccount && (
          <DeleteAccount onCancel={handleCancelClick} />  
        )}
        </S.Component>
        
      </S.Background>
      
    </div>
  );
};

export default MyPage;
