import React from 'react';
import { useParams, useNavigate, Outlet } from 'react-router-dom';

const MyBookClubPage = () => {
  return (
    <div>
      <h1>My Book Clubs</h1>
      <Outlet />
    </div>
  );
};

export default MyBookClubPage;
