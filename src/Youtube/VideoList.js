import React from 'react';
import VideoListItem from './VideoListItem'

const VideoList = (props) => {

  const videoItems = props.videos.map(video => {
    return (
      <VideoListItem
        onVideoSelect = {props.onVideoSelect}
        key={video.etag}
        video={video}
        />
      )
  });

  return (
    <div>
     <div className="col-md-4 list-group">
      {videoItems}
      </div>
      </div>
  )

};


export default VideoList;
