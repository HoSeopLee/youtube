import React from 'react';

const VideoItem = props => {
  const { video } = props;
  const { handleVideoSelect } = props;
  return (
    <div onClick={() => handleVideoSelect(video)} style={styles.videoItem}>
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
      <div>
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};
const styles = {
  videoItem: { margin: '3% 0' }
};

VideoItem.defaultProps = {
  video: null,
  handleVideoSelect: () => {}
};
export default VideoItem;
