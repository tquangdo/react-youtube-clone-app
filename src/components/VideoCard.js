import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Moment from 'react-moment';
import { YOUTUBE_WATCH_URL, YOUTUBE_STATIS_URL } from '../utils/common/constant';
import Axios from 'axios';

const VideoCard = ({ movie }) => {
  const [stateViewCount, setStateViewCount] = useState(0)
  const { id, snippet } = movie
  const { thumbnails, title, channelId, channelTitle, publishTime } = snippet
  useEffect(() => {
    const url = `${YOUTUBE_STATIS_URL}&id=${id.videoId}&key=${process.env.REACT_APP_APIKEY}`;
    const getMovieViews = async () => {
      const res = await Axios.get(url);
      setStateViewCount(res.data.items[0].statistics.viewCount)
    }
    getMovieViews()
  }, [id.videoId]);

  return (
    <div className='VideoCard'>
      <a
        href={`${YOUTUBE_WATCH_URL}v=${id.videoId}`}
        target='_blank'
        rel='noopener noreferrer'
      >
        <img
          className='VideoCard__thumbnail'
          id='thumbnail'
          src={thumbnails.high.url}
          alt={title}
        />
      </a>
      <div className='VideoCard__info'>
        <Avatar
          className='VideoCard__avatar'
          src={thumbnails.default.url}
          alt={channelId}
        />
        <div className='VideoCard__text'>
          <a
            className='VideoCard__text__title'
            href={`${YOUTUBE_WATCH_URL}v=${id.videoId}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            {title}
          </a>
          <p className='VideoCard__text__channel'>
            {channelTitle}
          </p>
          <p className='VideoCard__text__views'>
            {stateViewCount} views • <Moment fromNow>{publishTime}</Moment>
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
