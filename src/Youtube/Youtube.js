
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import './Youtube.css';
import YoutubeContainer from '../YoutubeContainer';
import Scrollbar from 'react-scrollbars-custom';

import _ from 'lodash';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
const API_KEY = 'AIzaSyCT5YNj0WpEUrt_4K8b3GZ6NoBZTOImXMA';

class Youtube extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);

    return (
      <div>
      <YoutubeContainer>
      <Scrollbar style={{ width: 450, height: 450 }}>
        <h5>Youtube</h5><SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
        </Scrollbar>
        </YoutubeContainer>
      </div>
    );
  }
}

export default Youtube
