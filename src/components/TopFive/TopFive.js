import React from 'react'
import { Container, Row, Col, Card, Badge } from 'react-bootstrap'
import { Loading } from '../index'

const TopFive = (props) => {
    return (
        <Container>
            <h4>Top 5 {props.title} Anime</h4>
            <Row>
                {
                    props.loading === false
                    ? props.topAnime.top.slice(0, 5).map(data => {
                        return (
                            <Col xs={12} sm={12} md={4} lg={2}>
                                <Card key={data.mal_id}>
                                    <div className="card-img-container">
                                        <span><Badge variant="secondary">{data.rank}</Badge></span>
                                        <Card.Img variant="top" src={data.image_url} />
                                    </div>
                                    <Card.Body>
                                        <Card.Title>{data.title}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                    : <Loading/>
                }
            </Row>
        </Container>
    )
}

export default TopFive