import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import TopFive from './TopFive'
import { connect } from 'react-redux'
import { getTopAiringAnime } from '../../actions/index'

class Airing extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getTopAiringAnime(1)
    }

    render() {
        console.log('airingggggg', this.props.anime)
        return (
            <Container className="top-five-container">
                {this.props.anime.loading === false
                ? <TopFive title="Airing" {...this.props.anime} />
                : <h3>Loading...</h3>
                }
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {anime: state.anime}
}

export default connect(mapStateToProps, { 
    getTopAiringAnime
})(Airing)