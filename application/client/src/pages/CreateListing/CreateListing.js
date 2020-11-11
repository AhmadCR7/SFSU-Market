// 3rd party imports
import React from 'react'
import { Form, Button} from 'react-bootstrap'



const CreateListing = (props) => {
  

  return (
    <div style={{marginLeft: '10px'}}><Form>
        <div style={{fontSize: '2em'}}>Create Listing</div>
        <Form.Group as={Form.Row} controlId="listingTitle">
            <Form.Label column sm={1}>Title: </Form.Label>
            <Form.Control style={{width: '70%'}}type="title" placeholder="Enter title" />
        </Form.Group>
        <Form.Group as={Form.Row} controlId="buttons">
            <Form.Label column sm={1}>Image: </Form.Label>
            <Form.Group>
                <Form.File id="image"/>
            </Form.Group>
        </Form.Group>
        <Form.Group as={Form.Row} controlId="listingDescription">
            <Form.Label column sm={1}>
                Description:
            </Form.Label>
            <Form.Control as="textarea" rows={3} style={{width:'70%'}} placeholder='Tell other users about your listing'/>
        </Form.Group>
        <Form.Group as={Form.Row} controlId="listingCategory">
            <Form.Label column sm={1}>Category: </Form.Label>
            <Form.Control style={{width: '10%'}} as="select">
                <option>Appliances</option>
                <option>Books</option>
                <option>Clothing</option>
                <option>Electronics</option>
                <option>Services</option>
            </Form.Control>
        </Form.Group>
        <Form.Group as={Form.Row} controlId="listingPrice">
            <Form.Label column sm={1}>Price: </Form.Label>
            <Form.Control style={{width: '10%'}}type="price" placeholder="XXX.XX" />
            <Form.Text>Please enter a number of dollars, to two decimal places.</Form.Text>
        </Form.Group>
        <Form.Group as={Form.Row} controlId="buttons">
            <Button variant="secondary" style={{marginRight:'10px'}}>Cancel</Button>
            <Button type="submit">Submit for approval</Button>
        </Form.Group>
    </Form></div>
  )
}

export default CreateListing
