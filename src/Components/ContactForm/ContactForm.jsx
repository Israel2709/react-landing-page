import React, { useState } from 'react'
import {
    Button,
    Form, 
    FormGroup, 
    Label, 
    Input,
    Row,
    Col,
} from 'reactstrap'

function ContactForm() {

    const [formData, setFormData] = useState({
        name: "Israel",
        lastName: "Salinas Martínez",
        email: "israel@kodemia.mx",
        phone: "5543788096",
        message: "Hola, putos todos!!!"
    })

    /*
        formData = {
            name: "Israel",
            lastName: "Salinas Martínez",
            email: "israel@kodemia.mx",
            phone: "5543788096",
            message: "Hola, putos todos!!!"
        }
    */

    const handleChange = event => {
        let property = event.target.name
        let value = event.target.value

        setFormData( { ...formData, [property] : value })

        console.log("property: ", property, "value: ", value)
    }

    const submitHandler = () => {
        console.log( formData )
    }

    const { name, lastName, email, phone, message } = formData
    return (
        <Form>
            <Row form>
                <Col md={6}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input 
                            type="text" 
                            name="name" 
                            id="name" 
                            placeholder="with a placeholder"
                            onChange={ handleChange }
                            value={name} 
                        />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="last-name">Last Name</Label>
                        <Input 
                        type="text" 
                        name="lastName" 
                        id="last-name" 
                        placeholder="lastName placeholder"
                        onChange={ handleChange }
                        value={lastName}  
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row form>
                <Col md={6}>
                    <FormGroup>
                        <Label for="emails">Email</Label>
                        <Input type="email" name="email" id="emails" onChange={ handleChange }placeholder="with a placeholder" 
                        value={email} />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="phone">Phone</Label>
                        <Input type="text" name="phone" id="phone" onChange={ handleChange }placeholder="password placeholder" 
                        value={phone} />
                    </FormGroup>
                </Col>
            </Row>
            <FormGroup>
                <Label for="message">Tell us about your challenge or opportunity</Label>
                onChange={ handleChange }<Input type="textarea" name="message" id="message"
                 value={message} />
            </FormGroup>
            <Button onClick={submitHandler}>Sign in</Button>
        </Form>
    )
}

export default ContactForm