import React, { Component } from 'react'
import { getSeasonalAnime } from '../../../actions/index'
import { SeasonalList } from '../../index'
import { connect } from 'react-redux'
import moment from 'moment'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import img1 from '../../../assets/images/anime-typing.gif'
import img2 from '../../../assets/images/anime-crying.gif'

const seasons = ['summer', 'spring', 'fall', 'winter']
const typeOptions = ['TV', 'ONA', 'OVA', 'Movie', 'Special'];

class Seasonal extends Component {
    constructor(props){
        super(props)

        this.state = {
            season: '',
            year: new Date(), //current year will be by default
            animeType: ''
        }
    }

    componentDidMount(){
        this.props.getSeasonalAnime(moment(this.state.year).format('YYYY'), '')
    }

    componentDidUpdate(prevProp, prevState){
        if(prevState.type !== this.state.type){
            this.setState({type: this.state.type})
        }
    }

    // render season dropdown and datepicker
    renderSeasonForm = () => {    
        return (
            <Container className="render-date-picker-container">
                <Row>
                    <Col xs={12} sm={12} md={3}>
                        <Form.Control
                            as="select"
                            id="inlineFormCustomSelectPref"
                            onChange={e => this.setState({ season: e.target.value })}
                            custom 
                            required
                        >
                            <option value="none">Season...</option>
                            {seasons.map( season => (<option value={season}>{season}</option>))}
                        </Form.Control>
                    </Col>
                    <Col xs={12} sm={12} md={3}>
                        <DatePicker
                            className="date-picker"
                            selected={this.state.year}
                            onChange={date => this.setState({ year: date })}
                            showYearPicker
                            dateFormat="yyyy"
                            yearItemNumber={9}
                        />
                    </Col>
                    <Col xs={12} sm={12} md={2}>
                        <Button type="submit" onClick={() => {
                            this.props.getSeasonalAnime(moment(this.state.year).format('YYYY'), this.state.season)
                        }}>Submit</Button>
                    </Col>
                    <Col xs={12} sm={12} md={3}>
                        <Form.Control
                            as="select"
                            id="seasonPicker"
                            onChange={e => this.setState({ animeType: e.target.value })}
                            custom
                        >
                            <option value="">Filter by type</option>
                            {typeOptions.map( type => (<option value={type}>{type}</option>))}
                        </Form.Control>
                    </Col>
                </Row>
            </Container>
        )
    }

    render() {
        return (
            <Container className="seasonal-container">
                {this.renderSeasonForm()}
                {
                    this.props.seasonalAnime.loading === false
                    ? this.props.seasonalAnime.seasonal.anime.length === 0 
                        ? <Container className="empty-container">
                                <h2>No data found for this season yet...</h2>
                                <img src={img2} alt=""/>
                            </Container>
                        : <SeasonalList {...this.props.seasonalAnime} animeType={this.state.animeType}/>
                    : <Container className="empty-container">
                        <img src={img1} alt=""/>
                        <h2>Select a year and a season to display some data</h2>
                       </Container>
                }
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {seasonalAnime: state.seasonalAnime}
}

export default connect(mapStateToProps, {
   getSeasonalAnime
})(Seasonal)