import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { RankingItem } from './../../../components'
import { Loading } from '../../index'

const RankingList = (props) => {
    if(props.anime.loading === true){
       return(
        <Container className="spinner-container">
            <Loading/>
        </Container>
       )
    }else{
        return (
            <React.Fragment>
                <h3 className="page-title">{props.anime.topTitle}</h3>
                <Row>
                    <RankingItem {...props.anime.topAnime}/>
                </Row>
            </React.Fragment>
        )
    }
}

export default RankingList