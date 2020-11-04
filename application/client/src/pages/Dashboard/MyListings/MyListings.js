import React from 'react';
import Table from 'react-bootstrap/Table'
import styled from "styled-components";
import {Button} from "react-bootstrap";


const PageStyled = styled.div`
  padding: 50px;
  
`
const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  button {
    margin: 5px;
    width: 150px;
  }
`

const MyListings = () => {
    return (
        <PageStyled>
        <div>
            <Table striped bordered hover >
                <thead>
                <tr>
                <th> </th>
                    <th>Calculus 2 Online Textbook Link</th>
                <th>  </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td><img
                    alt='headshot'
                    className='profile'
                    src={require('../../../images/Lauren.png')}
                ></img>
                </td>
                <td>
                    <h4> Description: </h4>
                    This link has full access to the Calculus 2 textbook.
                    Convenient for online students or students who do most
                    of their schooling remote. Easy purchase process.
                </td>
                <td>
                   <h4>$100</h4>
                    <ButtonsContainer>
                    <Button variant="primary" type="send">
                        Contact Seller
                    </Button>
                    </ButtonsContainer>
                </td>
                </tr>
                </tbody>
            </Table>
            <Table striped bordered hover >
                <thead>
                <tr>
                    <th> </th>
                    <th>Couch For Sale</th>
                    <th>  </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><img
                        alt='headshot'
                        className='profile'
                        src={require('../../../images/Lauren.png')}
                    ></img>
                    </td>
                    <td>
                        <h4> Description: </h4>
                        Used couch for sale. Approximately two years old.
                        Black in color. Available for pick up anytime. Not
                        available for shipping.
                    </td>
                    <td>
                        <h4>$300</h4>
                        <ButtonsContainer>
                            <Button variant="primary" type="send">
                                Contact Seller
                            </Button>
                        </ButtonsContainer>
                    </td>
                </tr>
                </tbody>
            </Table>
            <Table striped bordered hover >
                <thead>
                <tr>
                    <th> </th>
                    <th>Tutoring Available</th>
                    <th>  </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><img
                        alt='headshot'
                        className='profile'
                        src={require('../../../images/Lauren.png')}
                    ></img>
                    </td>
                    <td>
                        <h4> Description: </h4>
                        Offering tutoring services for two hours a day.
                        Meeting will occur on campus. Math and English
                        subjects only.
                    </td>
                    <td>
                        <h4>$40</h4>
                        <ButtonsContainer>
                            <Button variant="primary" type="send">
                                Contact Seller
                            </Button>
                        </ButtonsContainer>
                    </td>
                </tr>
                </tbody>
            </Table>
        </div>
            </PageStyled>
    )
}

export default MyListings