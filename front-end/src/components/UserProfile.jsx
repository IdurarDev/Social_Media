import React, { useState, useEffect } from 'react';
import { AiOutlineLagout } from 'react-icons/ia'; 
import { useParams, useNavigate } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';
import { userCreatedPinsQuery, userQuery, userSaved} from '../utils/data';
import { client } from '../client';
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';

const UserProfile = () => {
  return (
    <div>
      UserProfile
    </div>
  ); 
};

export default UserProfile;
 