import React from 'react';
import SearchCard from './SearchCard';
import TuneIcon from '@material-ui/icons/Tune';

const SearchPage = ({ movies }) => {
  return (
    <div className='SearchPage'>
      <div className='Search__filter'>
        <TuneIcon className='Search__icon' />{' '}
        <span className='Search__filter__text'>FILTER</span>
      </div>

      <div className='Search__contents'>
        {(movies && movies.length > 0)
          ? movies.map((movie, idx) => (
            // SearchCard = VideoRow (của Clever Programmer)
            <SearchCard key={idx} movie={movie} />
          ))
          : <h1>KO có kết quả nào được tìm thấy!</h1>
        }
      </div>
    </div>
  );
};

export default SearchPage;
