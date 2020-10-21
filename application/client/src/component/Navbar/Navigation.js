import React, { Component } from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,

} from './NavbaElement.js';
import { Form, FormControl, Button, NavDropdown } from 'react-bootstrap';



class Navigation extends Component {
  render() {
    return (
      <div>

        <Nav>
          <NavLink to='/'>
            <h2>SFSU Market</h2>
          </NavLink>
          <Bars />
          <NavDropdown
            title={<h6>All</h6>}
            style={{ marginLeft: "14%" }}
          >
            <NavDropdown.Item
              onClick={() => this.setState({ categories: "All" })}
            >
              All
              </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              onClick={() => this.setState({ categories: "Appliances" })}
            >
              Appliances
              </NavDropdown.Item>

            <NavDropdown.Item
              onClick={() => this.setState({ categories: "Books" })}
            >
              Books
              </NavDropdown.Item>

            <NavDropdown.Item
              onClick={() =>
                this.setState({ categories: "Clothes&Shoes" })
              }
            >
              Clothing & Shoes
              </NavDropdown.Item>

            <NavDropdown.Item
              onClick={() => this.setState({ categories: "Electronics" })}
            >
              Electronics
              </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => this.setState({ categories: "Services" })}
            >
              Services
              </NavDropdown.Item>
          </NavDropdown>
          <Form
            className="form-center"
            inline
            style={{
              width: "35rem",
            }}
            onSubmit={this.onSearch}
          >
            <FormControl
              type="text"
              placeholder="Search..."
              className="mr-sm-2"
              style={{
                margin: "auto auto%", width: "70%",

              }}
              onChange={e => {
                this.setState({ queries: e.target.value })
                  ;
              }}
            />
            <Button variant="outline-info" type="submit" style={{}}>
              Search
              </Button>
          </Form>
          <NavMenu>
            <NavLink to='/aboutus' activeStyle>
              About
          </NavLink>
            <NavLink to='/messages' activeStyle>
              Messages
          </NavLink>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/login'>Log In</NavBtnLink>
            <NavBtnLink to='/signup'>Create</NavBtnLink>
          </NavBtn>
        </Nav>
      </div>

    )
  }
}
export default Navigation