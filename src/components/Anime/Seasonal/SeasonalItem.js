import React from 'react'
import { ListGroup, Row, Col, Image, Badge } from 'react-bootstrap'
import moment from 'moment'

const SeasonalItem = (props) => {
    return (
        <ListGroup.Item>
            <Row>
                <Col xs={12} sm={12} md={4} lg={3}>
                    <Image src={props.image_url} alt={props.title} thumbnail />   
                </Col>
                <Col xs={12} sm={12} md={7} lg={8}>
                    <h4>{props.title}</h4>
                    <ul>
                        <li>
                            {
                                props.genres
                                ? props.genres.map( genre => {
                                    return (
                                        <Badge pill key={genre.mal_id} variant="secondary">
                                            {genre.name}
                                        </Badge>
                                    )
                                })
                                : null
                            }
                        </li>
                        <li>
                            <strong>Type:</strong> {props.type}
                        </li>
                        <li>
                            <strong>Airing Start:</strong>&nbsp;
                            {
                                props.airing_start
                                ? moment(props.airing_start).format('MMM DD YYYY')
                                : `Not Available`
                            }
                        </li>
                        <li>
                            <strong>Synopsis:</strong>
                            <p>{props.synopsis}</p>
                        </li>
                    </ul>
                </Col>
            </Row>
        </ListGroup.Item>
    )
}
 
export default SeasonalItem