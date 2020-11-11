// 3rd party imports
import React, {useState} from 'react'
import { Form, Button} from 'react-bootstrap'



const CreateListing = (props) => {
    
  const [price, setPrice] = useState('')
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('appliances')
  const [description, setDescription] = useState('')
  //setPrice("99.99")

  const handleSearch = (e) => {
      e.preventDefault()
      //var good = true
      //Description can be at most 200 characters, title at most 40 characters, price has to be all numbers,
      //except for a decimal point which is followed by two numbers
      //There doesn't have to be an image, so that's fine.
      var priceregex = /^\d+(?:\.\d{2})$/
      //This regular expression is based on one from https://stackoverflow.com/questions/2227370/currency-validation
      if (title.length > 40){
          alert("Your title is too long. Please enter one under 40 characters long.")
          return
      }
      if (title.length === 0){
          alert("Please title your post.")
          return
      }
      if (description.length > 1000){
          alert("Your description is too long. Please enter one under 1000 characters long.")
      }
      if (!priceregex.test(price)){
        alert("Your price is invalid. Please enter a number with two decimal places (ex: 12.20)")
        return
      }
      //Here is where I would then put all the necessary information on the server.
  }

  return (
    <div style={{marginLeft: '10px'}}><Form onSubmit={(e) => handleSearch(e)}>
        <div style={{fontSize: '2em'}}>Create Listing</div>
        <Form.Group as={Form.Row} controlId="listingTitle">
            <Form.Label column sm={1}>Title: </Form.Label>
            <Form.Control style={{width: '70%'}}type="title" placeholder="Enter title" onChange={(e)=>setTitle(e.target.value)}/>
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
            <Form.Control as="textarea" rows={3} style={{width:'70%'}} placeholder='Tell other users about your listing' onChange={(e)=>setDescription(e.target.value)}/>
        </Form.Group>
        <Form.Group as={Form.Row} controlId="listingCategory">
            <Form.Label column sm={1}>Category: </Form.Label>
            <Form.Control style={{width: '10%'}} as="select">
                <option onClick={()=>setCategory('appliances')}>Appliances</option>
                <option onClick={()=>setCategory('books')}>Books</option>
                <option onClick={()=>setCategory('clothing')}>Clothing</option>
                <option onClick={()=>setCategory('electronics')}>Electronics</option>
                <option onClick={()=>setCategory('services')}>Services</option>
            </Form.Control>
        </Form.Group>
        <Form.Group as={Form.Row} controlId="listingPrice">
            <Form.Label column sm={1}>Price: </Form.Label>
            <Form.Control style={{width: '10%'}} onChange={(e)=>setPrice(e.target.value)} type="price" placeholder="XXX.XX"/>
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
