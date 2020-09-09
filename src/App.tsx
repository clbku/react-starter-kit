import React, { Component } from 'react'
import styled from 'styled-components'

export default class App extends Component {
  render() {
    return <Container>hello world</Container>
  }
}

const Container = styled.div`
  font-size: 40px;
  text-transform: capitalize;
`
