import React from 'react'
import { ListGroup, Container } from 'react-bootstrap'
import { SeasonalItem, Loading } from '../../index'
import img from '../../../assets/images/anime-crying.gif'

const SeasonalList = (props) => {

    if(props.loading === false){
        let noMatchFound = []
        let matchFound = []

        if(props.seasonal.anime !== null){
            props.seasonal.anime.map( anime => {
                        
                if(anime.type === props.animeType){
                    if(!anime.r18){
                        matchFound.push(anime)
                    } 
                }else if(anime.type !== props.animeType){
                    noMatchFound.push(anime)
                }
                
            })
        }

        return (
            <Container>
                <div className="seasonal-list-header">
                    <h1>{props.seasonal.season_name} {props.seasonal.season_year}</h1>
                </div>
                <ListGroup>
                    {
                        matchFound.length !== 0
                        ? matchFound.map(anime =>{
                            return <SeasonalItem key={anime.mal_id} {...anime} />
                        })
                        : <Container className="empty-container">
                            <h2>
                                No content found for this <strong>type</strong>.<br/>
                                Please try choosing something else.
                            </h2>
                            <img src={img} alt=""/>
                            <h3>Status 204</h3>
                        </Container>
                    }
                </ListGroup>
            </Container>
        )
    }else{
        return <Loading/>
    }
    
}

export default SeasonalList