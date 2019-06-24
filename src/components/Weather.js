import ReactWeather from 'react-open-weather';
import React from 'react';
import Container from '../Container';

class Weather extends React.Component {

render () {
  return (
    <Container>
      <ReactWeather
      forecast="today"
      apikey="b1d6db9840534a6baea191045191305"
      type="city"
      city="London"
      />
      </Container>
  )
 }
}
export default  Weather
