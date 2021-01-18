import React, { useState } from 'react'
import { Card, Row, Col, Button, Badge } from 'react-bootstrap'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { GiTrophy } from 'react-icons/gi'
import { BrowserRouter as Link } from 'react-router-dom'

const CharacterCards = (props) => {

    let firstTop3Anime = props.topAnimeCharacters.top.slice(0,3)
    let remainingTopRanks = props.topAnimeCharacters.top.slice(3, props.topAnimeCharacters.top.length)
    
    const [list, setList] = useState([])
    const [buttonText, setButtonText] = useState('View More')
    const [displayValue, setDisplayValue] = useState('none')
    
    const charInfoLink = (cell, row) => {
        return (
            <div>
                <Link to={`/character/${row.mal_id}`}>
                    <a href={`/character/${row.mal_id}`}>
                        View Info
                    </a>
                </Link>
            </div>
        )
    }

    return (
        <React.Fragment>
            <Row>
                {
                    firstTop3Anime.map( character => {
                        return (
                            <Col xs={12} sm={12} md={4} lg={4} key={character.mal_id}>
                                <Card >
                                    <Card.Img variant="top" src={character.image_url} />
                                    <Card.Body>
                                        <h3>
                                            <Badge variant="secondary"><GiTrophy/> {character.rank}</Badge>
                                        </h3>
                                        <Card.Title>{character.title}</Card.Title>
                                        <Card.Text>
                                            Name in Kanji: <br/> {character.name_kanji}
                                        </Card.Text>
                                        <Link to={`/character/${character.mal_id}`}>
                                            <a href={`/character/${character.mal_id}`}>
                                                Get Info
                                            </a>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>

            <Button className="char-list-btn" variant="outline-secondary" style={{margin: '2.5rem auto', display: 'block'}}
                onClick={() => {
                    list.length === 0 ? setList(remainingTopRanks) : setList([])

                    if(buttonText === 'View More'){
                        setButtonText('Hide List')
                        setDisplayValue('inherit')
                    }else{
                        setButtonText('View More')
                        setDisplayValue('none')
                    }
                }}
            >{buttonText}</Button>

            {/* View the rest of the list */}
            <div style={{display: `${displayValue}`, marginTop: '1rem'}}>
                <BootstrapTable data={list} version="4">
                    <TableHeaderColumn dataField="rank" dataAlign='center' isKey>Rank #</TableHeaderColumn>
                    <TableHeaderColumn dataField="title" >Name</TableHeaderColumn>
                    <TableHeaderColumn dataField="name_kanji" >Name in Kanji</TableHeaderColumn>
                    <TableHeaderColumn dataField="mal_id" dataFormat={charInfoLink} dataAlign='center'>Character Info</TableHeaderColumn>
                </BootstrapTable>
            </div>
        </React.Fragment>
    )
}

export default CharacterCards