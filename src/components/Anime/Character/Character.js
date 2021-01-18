import React, { Component } from 'react'
import {getCharacterInfo, getCharacterPhotos} from '../../../actions/index'
import {connect} from 'react-redux'
import {Container, Row, Col, Tabs, Tab, Image} from 'react-bootstrap'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {Loading} from '../../index'

class Character extends Component {
    constructor(props){
        super(props)

        this.state = {
            anime_id: 0
        }
    }

    updateCharacterInfo = (id) => {
        if(this.props.match){
            id = this.props.match.params.id
            if(id !== undefined || id !== null || id !== 0){
                this.setState({
                    anime_id: id
                })
                this.props.getCharacterInfo(id)
                this.props.getCharacterPhotos(id)
            }
        }
    }

    createMarkup = (x) => {
        if(x){
            return {__html: x.replace(/\\*(?:\\r\\n|\r|\\n*)/g, '')}
        }
        
      }

    componentDidMount(){
        this.updateCharacterInfo(this.state.anime_id)
    }

    displayImage(cell, row) {
        return (
            <div>
                <img src={row.image_url} alt={row.name}/>
            </div>
        )
    }
    
     

    render() {
        
        // removing duplicated photos
        let removeDuplicatesFromArray = () => {
            if(this.props.photos.pictures){
                return [...new Set(
                    this.props.photos.pictures.map(el => JSON.stringify(el))
                )].map(e => JSON.parse(e));
            }
        }

        let filteredPic = removeDuplicatesFromArray()

        return (
            <Container className="char-profile-page">
                {
                    this.props.info
                    ?   <Container>
                            <Row>
                                <Col xs={12} sm={12} md={4}>
                                    <Image src={this.props.info.image_url} rounded className="char-prof-img"/>
                                </Col>
                                <Col xs={12} sm={12} md={4}>
                                    <h2>{this.props.info.name}</h2>
                                    <ul>
                                        <h5>Nicknames:</h5>
                                        {this.props.info.nicknames
                                        ?   this.props.info.nicknames.length !== 0
                                            ?this.props.info.nicknames.map(name =>{
                                            return <li>{name}</li>
                                            })
                                            : <p>No special nickname found</p>
                                        : <p>none</p>}
                                    </ul>
                                </Col>
                            </Row>
                        
                            <Tabs defaultActiveKey="about" transition={false} id="noanim-tab-example">
                                <Tab eventKey="about" title="About">
                                    <div style={{whiteSpace: 'pre-wrap', lineHeight: '1.75'}} dangerouslySetInnerHTML={this.createMarkup(this.props.info.about)} />
                                </Tab>
                                <Tab eventKey="animeography" title="Animeography">
                                    <BootstrapTable data={this.props.info.animeography} version="4">
                                        <TableHeaderColumn dataField="image_url" width='15%' dataAlign='center' dataFormat={this.displayImage} isKey>Image</TableHeaderColumn>
                                        <TableHeaderColumn dataField="name" tdStyle={{ whiteSpace: 'normal', wordWrap: 'break-word', verticalAlign: 'middle'}}>Name</TableHeaderColumn>
                                        <TableHeaderColumn dataField="role" tdStyle={{verticalAlign: 'middle'}}>Role</TableHeaderColumn>
                                    </BootstrapTable>
                                </Tab>
                                <Tab eventKey="mangaography" title="Mangaography">
                                        <BootstrapTable data={this.props.info.mangaography} version="4">
                                        <TableHeaderColumn dataField="image_url" width='15%' dataAlign='center' dataFormat={this.displayImage} isKey>Image</TableHeaderColumn>
                                        <TableHeaderColumn dataField="name" tdStyle={{ whiteSpace: 'normal', wordWrap: 'break-word', verticalAlign: 'middle'}}>Name</TableHeaderColumn>
                                        <TableHeaderColumn dataField="role" tdStyle={{verticalAlign: 'middle'}}>Role</TableHeaderColumn>
                                    </BootstrapTable>
                                </Tab>
                                <Tab eventKey="voiceactors" title="Voice Actors">
                                    <BootstrapTable data={this.props.info.voice_actors} version="4">
                                    <TableHeaderColumn dataField="image_url" width='15%' dataAlign='center' dataFormat={this.displayImage} isKey>Image</TableHeaderColumn>
                                        <TableHeaderColumn dataField="name" tdStyle={{ whiteSpace: 'normal', wordWrap: 'break-word', verticalAlign: 'middle'}}>Name</TableHeaderColumn>
                                        <TableHeaderColumn dataField="language" tdStyle={{verticalAlign: 'middle'}}>Language</TableHeaderColumn>
                                    </BootstrapTable>
                                </Tab>
                                <Tab eventKey="photos" title="Photos">
                                    <Row>
                                        {
                                            this.props.photos.pictures 
                                            ? filteredPic.map(photo => {
                                                return(
                                                    <Col xs={12} sm={12} md={4} lg={3} key={photo.id}>
                                                        <Image src={photo.small} rounded />
                                                    </Col>
                                                )
                                            })
                                            : <Loading/>
                                        }
                                        
                                    </Row>
                                </Tab>
                            </Tabs>

                        </Container>
                    : <Loading/>
                }   
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        info: state.character.info,
        photos: state.character.photos
    }
}

export default connect(mapStateToProps, {
    getCharacterInfo, getCharacterPhotos
})(Character)