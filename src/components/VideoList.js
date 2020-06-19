import React from 'react';
import VideoItem from './VideoItem';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';

const VideoList = props => {
  const { videos } = props;
  const { handleVideoSelect } = props;
  const renderedVideos = videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        handleVideoSelect={handleVideoSelect}
      />
    );
  });
  if (videos.length === 0) {
    return (
      <div>
        <div className="ui embed">
          <Segment>
            <Dimmer active inverted>
              <Loader size="mini">Loading</Loader>
            </Dimmer>
            <Image src="https://react.semantic-ui.comhttps://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
          </Segment>
        </div>
      </div>
    );
  }
  return <div className="ui relaxed divided list">{renderedVideos}</div>;
};
VideoList.defaultProps = {
  videos: [],
  handleVideoSelect: () => {}
};
export default VideoList;
