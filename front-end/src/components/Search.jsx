import React, { useState, useEffect } from 'react';

import MasonryLayout from './MasonryLayout';
import { client } from '../client';
import { feedQuery, searchQuery } from '../utils/data';
import Spinner  from './Spinner';

const Search = ( { searchTerm } ) => {
  const [pins, setPins] = useState(null);
  const [loading, setLoading] = useState(true);
  
  return (
    <div>
        {loading && <Spinner message="Searching for pins..." />}
        {pins?.length !== 0 && <MasonryLayout pins={pins} />}
        {pins?.length === 0 && searchTerm !== '' && !loading && (
          <div className="mt-10 text-center text-xl">No Pins Found!</div>
        )}
    </div>
    );
};

export default Search;
