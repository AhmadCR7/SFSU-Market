import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'
import styled from "styled-components";
import { Button } from 'react-bootstrap'
import './Messages.css'

const PageStyled = styled.div`
  padding: 50px;
  
`
class CreateMessage extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            subject: '',
            message: ''

        }
    }
    handleNameChange = (event) =>{
        this.setState({
            name: event.target.value,

        })
    }
    handleSubjectChange = (event) =>{
        this.setState({
            subject: event.target.value,

        })
    }
    handleMessageChange = (event) =>{
        this.setState({
            message: event.target.value,

        })
    }
    handleSubmit = event =>{
      alert(`${this.state.name} ${this.state.subject} ${this.state.message}`)
        event.preventDefault()
    }

    render() {
        return (
            <PageStyled>
                <div>
                    <div className='container'>
                        <div className='col-8'>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="messageForm.ControlInput1">
                                    <div className="a"> Create New Message</div>
                                    <Form.Label>Message User:</Form.Label>
                                    <Form.Control type="text"
                                                  value = {this.state.name}
                                                  onChange = {this.handleNameChange}
                                                  placeholder="Enter Name"/>
                                </Form.Group>
                                <Form.Group controlId="messageForm.ControlInput2">
                                    <Form.Label>Subject:</Form.Label>
                                    <Form.Control type="text"
                                                  value = {this.state.subject}
                                                  onChange = {this.handleSubjectChange}
                                                  placeholder="Enter Subject"/>
                                </Form.Group>
                                <Form.Group controlId="messageForm.ControlTextarea1">
                                    <Form.Label>Write Message:</Form.Label>
                                    <Form.Control as="textarea"
                                                  value = {this.state.message}
                                                  onChange = {this.handleMessageChange}
                                                  rows={5}/>
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Send
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </PageStyled>
        )
    }
}

export default CreateMessage