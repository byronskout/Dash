import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import Container from '../src/Container';

class Twitter extends React.Component {
  render(){
    return (
      <Container>
      <TwitterTimelineEmbed
         sourceType="profile"
         screenName="dan_abramov"
         options={{height: 400}}
        />
      </Container>
    )
  }
}

export default Twitter;
