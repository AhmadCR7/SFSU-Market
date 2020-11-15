import React, { useState } from 'react'
import './Messages.css'
import Alert from 'react-bootstrap/Alert'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'

const PageStyled = styled.div`
  padding: 20px;
`

const Messages = () => {
  const [visible, setVisible] = useState(true)

  if (visible) {
    return (
      <PageStyled>
        <Alert onClose={() => setVisible(false)} dismissible>
          <p className="mb-0">
            <h4 className="alert-heading"> From User: Lauren </h4>
          </p>
          <p>
            Hi there! I am messaging about the calculus 2 listing. I am very interested in
            purchasing. Please send me details for payment thanks!
          </p>
          <Button variant="primary" type="submit">
            Reply
          </Button>
        </Alert>
        <Alert onClose={() => setVisible(false)} dismissible>
          <p className="mb-0">
            <h4 className="alert-heading">From User: Steven </h4>
          </p>
          <p>
            Hey! I am looking to purchase your couch I see it is listed for sale. I can come pick it
            up today. Give me a call (925) 123-4567.
          </p>
          <Button variant="primary" type="submit">
            Reply
          </Button>
        </Alert>
        <Alert onClose={() => setVisible(false)} dismissible>
          <p className="mb-0">
            <h4 className="alert-heading"> From User: Nick </h4>
          </p>
          <p>
            I am interested in your tutoring listing. I am looking for some help this week and next
            week. What times are you available?
          </p>
          <Button varian t="primary" type="submit">
            Reply
          </Button>
        </Alert>
      </PageStyled>
    )
  }
  return <></>
}

export default Messages
