import React, { useState } from 'react';
import { API_KEY } from './api/youtube';
import { Searchbar, VideoList, VideoDetail } from './components';
import youtube from 'youtube-api-search';
import 'semantic-ui-css/semantic.min.css';

const App = props => {
  const [videos, setVideos] = useState([]);
  const [selecteVideo, setSelecteVideo] = useState(null);

  //api 연결함수 호출
  const handleSubmit = async searchbar => {
    /*node_moduls 에서 youtube-api-search에 해당하는 
    index를 찾아서 maxResults 값을 정의해 두면 값을5개가 아닌 필요한 만큼 불러올수 있습니다.*/
    youtube({ key: API_KEY, term: searchbar, maxResults: 20 }, videos => {
      setVideos(videos);
      setSelecteVideo(videos[0]);
    });
  };
  //검색결과
  const handleVideoSelect = video => {
    setSelecteVideo(video);
  };
  return (
    <div className="ui container" style={{ margin: '1em' }}>
      <Searchbar handleFormSubmit={handleSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selecteVideo} />
          </div>
          <div className="five wide column">
            <VideoList handleVideoSelect={handleVideoSelect} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
