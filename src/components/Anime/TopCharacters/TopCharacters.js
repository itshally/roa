import React, { Component } from 'react'
import { getTopAnimeCharacters }from'../../../actions/index'
import { connect } from 'react-redux'
import { Container } from 'react-bootstrap'
import { CharacterCard } from '../../index'


class TopCharacters extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getTopAnimeCharacters()
    }

    render() {
        return (
            <Container className="top-characters-container">
                <h2>Anime Leaderboard:</h2>
                {
                    !this.props.topAnimeCharacters.loading
                    ? <CharacterCard {...this.props.topAnimeCharacters} />
                    : <h3>Loading...</h3>
                }
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {topAnimeCharacters: state.topCharacters}
}

export default connect(mapStateToProps, {
    getTopAnimeCharacters
})(TopCharacters)