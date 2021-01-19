import React, { Component } from 'react'
import { Container, Pagination } from 'react-bootstrap';

import { connect } from 'react-redux'
import {
    getAllTopAnime,
    getTopAiringAnime,
    getTopUpcomingAnime,
    getTopTVSeriesAnime,
    getTopMoviesAnime,
    getTopOVAAnime,
    getTopSpecialAnime,
    getMostPopularAnime,
    getMostFavoritedAnime
} from '../../../actions/index'

import { RankingList } from './../../index'

class Ranking extends Component {
    constructor(props){
        super(props)

        this.state = {
            pageNumber: 1
        }
    }

    updateAnime = () => {
        const path = window.location.pathname;
        
        switch(path){
            case `/all-anime`:
                this.props.getAllTopAnime(this.state.pageNumber)
                break;
            case '/top-airing':
                this.props.getTopAiringAnime(this.state.pageNumber) 
                break;
            case '/top-upcoming':
                this.props.getTopUpcomingAnime(this.state.pageNumber)
                break;
            case '/top-tv':
                this.props.getTopTVSeriesAnime(this.state.pageNumber)
                break;
            case '/top-movies':
                this.props.getTopMoviesAnime(this.state.pageNumber)
                break;
            case '/top-ovas':
                this.props.getTopOVAAnime(this.state.pageNumber)
                break;
            case '/top-specials':
                this.props.getTopSpecialAnime(this.state.pageNumber)
                break;
            case '/most-popular':
                this.props.getMostPopularAnime(this.state.pageNumber)
                break;
            case '/most-favorited':
                this.props.getMostFavoritedAnime(this.state.pageNumber)
                break;
            default: 
                this.props.getAllTopAnime(this.state.pageNumber)
                break;
        }
    }
   
    componentDidMount() {
        this.updateAnime()
    }

    componentDidUpdate(prevProp, prevState, nextProps){
        console.log('loc', prevProp.location)
        if(prevState.pageNumber !== this.state.pageNumber  ){
            this.updateAnime() 
        }

        //refreshes the pageNumber to 1 when the user clicks a new link
        if(prevProp.location.pathname !== window.location.pathname){
            this.setState({
                pageNumber: 1
            })
        }
    }

    render() {
        return (
            <Container className="home-container">
                <Container className="ranking-container">
                    <RankingList {...this.props} />
                    <Pagination>
                        <Pagination.Prev onClick={() => {
                            return this.setState({
                                pageNumber: this.state.pageNumber > 1 ?  this.state.pageNumber - 1 : 1
                            })
                        }}/>
                        <Pagination.Next onClick={() => {
                            return this.setState({pageNumber: this.state.pageNumber + 1})
                        }}/>
                    </Pagination>
                </Container>
            </Container>
         )
    }
}

const mapStateToProps = state => {
    return {anime: state.anime}
}

export default connect(mapStateToProps, {
    getAllTopAnime,
    getTopAiringAnime,
    getTopUpcomingAnime,
    getTopTVSeriesAnime,
    getTopMoviesAnime,
    getTopOVAAnime,
    getTopSpecialAnime,
    getMostPopularAnime,
    getMostFavoritedAnime
})(Ranking)