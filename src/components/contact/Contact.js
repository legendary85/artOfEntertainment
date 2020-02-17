// Functional component
import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom'
import { Col, Row, Form, FormGroup, Input, Label, Button, Alert } from 'reactstrap';
// import Input from './common/input.js'
import axios from 'axios'




// component level state
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    number: '',
    select: '',
    date: ''
  });


  // Destructure data
  const { name, email, message, number, select, date } = formData;

  // [e.target.name] targets the of eact input
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault();
    console.log(`Submitted`)



    // Maybe use for redux (Maybe)
    const newClient = {
      name,
      email,
      message,
      number,
      select,
      date
    }
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const body = JSON.stringify(newClient)
      const res = await axios.post('/api/form', body, config);
      console.log(res.data)
      let i = true;
      if (i === true) {
        return <Redirect to="/hello" />
      }
    } catch (err) {
      console.log(err.response.data);
    }
    // clientSubmit().then(clearState);
    // if (window.confirm) {
    //   `Request Submitted `
    // }



  }



  return <Fragment>
    <Router>
      <Switch>
        <Route exact path="/" render={() =>

          <div className='container'>
            <Form id='contact-form' onSubmit={e => {
              onSubmit(e);
              setFormData({
                name: '',
                email: '',
                message: '',
                number: '',
                select: '',
                date: ''
              })
            }}>
              <Row >
                <Col md={6}>
                  <FormGroup>
                    <Label for='name'>Name</Label>
                    <Input
                      autoFocus
                      value={name}
                      type='text'
                      name='name'
                      onChange={e => onChange(e)}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for='email'>Email</Label>
                    <Input
                      value={email}
                      type='email'
                      name='email'
                      onChange={e => onChange(e)}
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row >
                <Col md={4}>
                  <FormGroup>
                    <Label for='phone'>Phone</Label>
                    <Input
                      value={number}
                      type='number'
                      name='number'
                      onChange={e => onChange(e)}
                      required
                    />
                  </FormGroup>
                </Col>

                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleSelect">Select a Package</Label>
                    <Input
                      type="select" value={select} name="select" id="exampleSelect" onChange={e => onChange(e)} required>
                      <option selected>Choose...</option>
                      <option value="bronze">Bronze</option>
                      <option value="gold">Gold</option>
                      <option value="platinum">Platinum</option>
                      <option value="special">Special Request</option>
                    </Input>
                  </FormGroup>
                </Col>

                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleDate">Date of Event</Label>
                    <Input
                      value={date}
                      type="date"
                      name="date"
                      id="exampleDate"
                      placeholder="date placeholder"
                      onChange={e => onChange(e)}
                    />
                  </FormGroup>
                </Col>
              </Row>

              <FormGroup>
                <Label for='message'>Messsage</Label>
                <Input
                  value={message}
                  type='textarea'
                  name='message'
                  onChange={e => onChange(e)}
                  required
                />

              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </div>
        }></Route>

      </Switch>
    </Router>
  </Fragment>

}

export default Contact;



