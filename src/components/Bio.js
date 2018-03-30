import React from 'react'
import styled from 'styled-components'

const Container = styled.aside`
  align-self: flex-start;
  clip-path: polygon(0 16px, 100% 0, 100% calc(100% - 16px), 0 100%);
  background-color: #ececec;
  padding: 32px 16px;
  transform: none;

  &:hover {
    --title-size: 1.2;
    --title-rotate: -2deg;
  }
`

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 3.2rem;
  margin-bottom: 8px;

  transition: transform 180ms cubic-bezier(0.16, 0.79, 0.71, 1.99);
  transform: scale(var(--title-size)) rotateZ(var(--title-rotate));
  transform-origin: 0 50%;
`

const Description = styled.p`
  font-size: 1.5rem;
  line-height: 2.8rem;
`

class Bio extends React.Component {
  render() {
    return (
      <Container>
        <Title>Hi, I'm Pav 👋</Title>
        <Description>
          I like to build and design things. I'm currently studying at the
          University of Birmingham.
        </Description>
      </Container>
    )
  }
}

export default Bio
