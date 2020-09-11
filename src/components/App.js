import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import SideBar from './SideBar';
import RecommendedVideos from './RecommendedVideos';
import SearchPage from './SearchPage';
import Loader from './Loader';
import axios from 'axios';
import { YOUTUBE_SNIPPET_URL, YOUTUBE_SEARCHKW_DEFAULT } from '../utils/common/constant';

const App = () => {
  const [stateMovies, setMovies] = useState([]);
  const [stateInput, setInput] = useState('');
  const [stateSearch, setSearch] = useState(YOUTUBE_SEARCHKW_DEFAULT);
  //Lí do phải để code useState trong "App.js" mà ko phải "Header.js" vì cần "stateIsLoading"
  const [stateIsLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = `${YOUTUBE_SNIPPET_URL}&q=${stateSearch}&key=${process.env.REACT_APP_APIKEY}`;

    const getMovies = async () => {
      const response = await axios.get(url);
      setMovies(response.data.items);
      setIsLoading(false);
    };

    getMovies();
  }, [stateSearch]);

  const onHandleInput = e => {
    const value = e.target.value;
    setInput(value);
  };

  const onHandleSearch = () => {
    setSearch(encodeURI(stateInput));
  };

  return (
    <div className='App'>
      <Header
        input={stateInput}
        handleSearch={onHandleSearch}
        handleInput={onHandleInput}
      />
      <Switch>
        <Route exact path='/youtube-clone-app'>
          <div className='contents'>
            <SideBar />
            {stateIsLoading ? <Loader /> : <RecommendedVideos movies={stateMovies} />}
          </div>
        </Route>
        <Route path='/youtube-clone-app/search'>
          <div className='contents'>
            <SideBar />
            {stateIsLoading ? <Loader /> : <SearchPage movies={stateMovies} />}
          </div>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
