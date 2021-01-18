import React from 'react'
import { Container } from 'react-bootstrap'
import { TopCharacters, Airing } from '../index'
import img1 from '../../assets/images/anime-excited.gif'

const Home = () => {
    return (
        <Container className="home-container">
            <Container className="greeting-container">
                <h1>WELCOME TO <span>REPUBLIC OF ANIME!</span></h1>
                <h2>Get updated of what's trending today.</h2>
                <a href="/about" className="header-link">Learn More</a>
                <img src={img1} alt=""/>
            </Container>
            <Airing/>
            <TopCharacters />
        </Container>
    )
}

export default Home  