import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import {BrowserRouter as Link} from 'react-router-dom'

const NavigationBar = () => {
    return (
        <React.Fragment>
            <Navbar expand="lg" fixed="top">
                <Navbar.Brand href="/">ROA</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Link to="/">
                        <Nav.Link href="/">Home</Nav.Link>
                    </Link>
                    <Link to="/about">
                        <Nav.Link href="/about">About</Nav.Link>
                    </Link>

                    <NavDropdown title="Top Anime" id="basic-nav-dropdown">
                        <Link to='/top-series'>
                            <NavDropdown.Item href="/all-anime">All Anime</NavDropdown.Item>
                        </Link>

                        <Link to="/top-airing">
                            <NavDropdown.Item href="/top-airing">Top Airing</NavDropdown.Item>
                        </Link>

                        <Link to="/top-upcoming">
                            <NavDropdown.Item href="/top-upcoming">Top Upcoming</NavDropdown.Item>
                        </Link>

                        <Link to="/top-tv">
                            <NavDropdown.Item href="/top-tv">Top TV Series</NavDropdown.Item>
                        </Link>

                        <Link to="/top-movies">
                            <NavDropdown.Item href="/top-movies">Top Movies</NavDropdown.Item>
                        </Link>

                        <Link to="/top-ovas">
                            <NavDropdown.Item href="/top-ovas">Top OVAs</NavDropdown.Item>
                        </Link>

                        <Link to="/top-specials">
                            <NavDropdown.Item href="/top-specials">Top Specials</NavDropdown.Item>
                        </Link>
                        <NavDropdown.Divider/>
                        <Link to="/most-popular">
                            <NavDropdown.Item href="/most-popular">Most Popular</NavDropdown.Item>
                        </Link>

                        <Link to="/most-favorited">
                            <NavDropdown.Item href="/most-favorited">Most Favourited</NavDropdown.Item>
                        </Link>
                    </NavDropdown>

                    <Link to="/seasonal">
                        <Nav.Link href="/seasonal">Seasonal</Nav.Link>
                    </Link>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    )
}

export default NavigationBar