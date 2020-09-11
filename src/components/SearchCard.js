import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { YOUTUBE_WATCH_URL, YOUTUBE_STATIS_URL } from '../utils/common/constant';
import Axios from 'axios';

// SearchCard = VideoRow (của Clever Programmer)
const SearchCard = ({ movie }) => {
  const [stateViewCount, setStateViewCount] = useState(0)
  const { id, snippet } = movie
  const {
    thumbnails, title, channelTitle,
    publishTime, description
  } = snippet
  useEffect(() => {
    const url = `${YOUTUBE_STATIS_URL}&id=${id.videoId}&key=${process.env.REACT_APP_APIKEY}`;
    const getMovieViews = async () => {
      const res = await Axios.get(url);
      setStateViewCount(res.data.items[0].statistics.viewCount)
    }
    getMovieViews()
  }, [id.videoId]);
  return (
    <div className='SearchCard'>
      <a
        href={`${YOUTUBE_WATCH_URL}v=${id.videoId}`}
        target='_blank'
        rel='noopener noreferrer'
      >
        <div className='SearchCard__image'>
          <img
            src={thumbnails.high.url}
            alt={title}
          />
        </div>
      </a>
      <div className='SearchCard__contents'>
        <a
          className='SearchCard__title'
          href={`${YOUTUBE_WATCH_URL}v=${id.videoId}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          {title}
        </a>
        <div className='SearchCard__stats'>
          <p>{channelTitle}</p>
          <CheckCircleIcon className='SearchCard__stats__icon' />
          <p>
            <span className="SearchCard__views">
              <span className="SearchCard__viewsNumber">{stateViewCount}</span> views
            </span>
             • <Moment fromNow>{publishTime}</Moment>
          </p>
        </div>
        <p className='SearchCard__description'>{description}</p>
      </div>
    </div>
  );
};

export default SearchCard;
