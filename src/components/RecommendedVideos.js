import React from 'react';
import VideoCard from './VideoCard';

const RecommendedVideos = ({ movies }) => {
  return (
    <div className='Recommended'>
      {movies.map((movie, idx) => (
        <VideoCard key={idx} movie={movie} />
      ))}
    </div>
  );
};

export default RecommendedVideos;
