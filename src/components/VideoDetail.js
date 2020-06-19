import React from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';

const VideoDetail = props => {
  const { video } = props;
  if (video === null) {
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

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} allowFullScreen title="Video player" />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};
VideoDetail.defaultProps = {
  video: null
};

export default VideoDetail;
