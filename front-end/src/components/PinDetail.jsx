import React, { useState , useEffect  } from 'react';
import { MdDownloadForOffline  } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { client, urlFor } from '../client';
import MasonryLayout from './MasonryLayout';
import { pinDetailMorePinQuery, pinDetailQuery } from '../utils/data';
import Spinner from './Spinner';

const PinDetail = ( { user }) => {
  const [pins, setPins] = useState(null); 
  const [pinDetail, setPinDetail] = useState(null);
  const [comment, setComment] = useState('');
  const [addingComment, setAddingComment] = useState(false);
  const { pinId } = useParams()
  
  if (!pinDetail) return <Spinner message="Loading pin..."/>

  return (
    <div>
        PinDetail
    </div>
    );
};

export default PinDetail;
