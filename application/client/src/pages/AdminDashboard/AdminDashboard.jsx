import React from 'react'
import { Table, Card, Badge, Button } from 'react-bootstrap'

const AdminDashboard = () => (
  <Table striped bordered hover variant="light">
    <thead>
      <h1>
        Admin Dashboard
        <Badge variant="secondary" />
      </h1>
      <tr>
        <th>Pending Posts</th>
        <th>Recent Posts</th>
        <th>Recent Messages</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <Card.Text>Username</Card.Text>
              <Button variant="primary">Go to post</Button>
            </Card.Body>
          </Card>
        </td>
        <td>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <Card.Text>Username</Card.Text>
              <Button variant="primary">Go to post</Button>
            </Card.Body>
          </Card>
        </td>
        <td />
      </tr>

      <tr>
        <td>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <Card.Text>Username</Card.Text>
              <Button variant="primary">Go to post</Button>
            </Card.Body>
          </Card>
        </td>
        <td>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <Card.Text>Username</Card.Text>
              <Button variant="primary">Go to post</Button>
            </Card.Body>
          </Card>
        </td>
        <td>Thornton</td>
      </tr>
      <tr>
        <td>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <Card.Text>Username</Card.Text>
              <Button variant="primary">Go to post</Button>
            </Card.Body>
          </Card>
        </td>
        <td colSpan="2">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <Card.Text>Username</Card.Text>
              <Button variant="primary">Go to post</Button>
            </Card.Body>
          </Card>
        </td>
      </tr>
    </tbody>
  </Table>
)

export default AdminDashboard
