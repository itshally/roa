import React from 'react'
import {Container} from 'react-bootstrap'
import {GiHeartWings} from 'react-icons/gi'
import img1 from './../assets/images/fiona-1.gif'

function About() {
    return (
        <Container className="about-container">
            <div className="header">
                <h1>Looking for Anime information?</h1>
                <h3>Here is another resource for you.</h3>
            </div>
            <h2>About Republic of Anime</h2>
            <hr/>
            <h5>Acknowledgements</h5>
            <p>Firstly, I would like to give a recognition to:
            </p>
            <ul>
                <li>
                    <a href="https://myanimelist.net/about.php" target="_blank" rel="noopener noreferrer">MyAnimeList</a>
                </li>
                <li>
                    <a href="https://jikan.moe/" target="_blank" rel="noopener noreferrer">Jikan API</a>
                </li>
                <li>
                    <a href="https://giphy.com/" target="_blank" rel="noopener noreferrer">Giphy</a>
                </li>
            </ul>
            <p>
                They are the reasons behind why I created this website and for making this
                possible. Therefore, this website has no original ownership of any content.
                Another reason why I created this is because of my fondness towards Anime
                <GiHeartWings/>, and to explore and to enhance my hobby.
            </p>
            <p>
                Republic of Anime (ROA) displays information about Anime (for the meantime).
                With that said, it can add more features in the future.
                <br/>
                Well, that's all for now!
            </p>
            <img src={img1} alt=""/>
        </Container>
    )
}

export default About