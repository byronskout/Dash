import React from 'react';
import tinytime from 'tinytime';
import styled from 'styled-components'
import Container from '../Container'

const TimeItem = styled.div`
  font-size: 4em;
  text-align: center;
`

const DateItem = styled.div`
  font-size: 1.5em;
  text-align: center;
`

export default class DateTime extends React.Component {

  state = {
    date: new Date()
  }

  componentDidMount () {
    const { interval } = this.props

    this.interval = setInterval(() => this.updateTime(), interval)
  }

  updateTime () {
    this.setState({ date: new Date() })
  }

  render () {
    const { date } = this.state
    return (
      <div>
      <Container>
        <TimeItem>{tinytime('{H}:{mm}:{ss}').render(date)}</TimeItem>
        <DateItem>{tinytime('{DD}.{Mo}.{YYYY}').render(date)}</DateItem>
        </Container>
        </div>
    )
  }
}
