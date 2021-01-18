import React from 'react'
import { Card, Badge } from 'react-bootstrap'

const RankingItem = (props) => {
    return (
        <React.Fragment>
            {
                props.top
                ? props.top.map( data => {
                    return (
                        <Card key={data.mal_id}>
                            <div className="card-img-container">
                                <span><Badge variant="secondary">{data.rank}</Badge></span>
                                <Card.Img variant="top" src={data.image_url} />
                            </div>
                            <Card.Body>
                                <Card.Title>{data.title}</Card.Title>
                            </Card.Body>
                        </Card>
                    )
                })
                :null
            }
        </React.Fragment>
    )
}

export default RankingItem