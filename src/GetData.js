import { Table, Button, Form, Row, Col } from 'react-bootstrap';
import axios from "axios";
import React, { useState, useEffect } from "react";

const Users = "https://jsonplaceholder.typicode.com/users";

function Getdata() {
    const [post, setPost] = useState([]);

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [website, setWebsite] = useState('');
    const [company, setCompany] = useState('');

    useEffect(() => {
        axios.get(Users).then((response) => {
            setPost(response.data);
            // console.log(response.data)
        });
    }, []);

    
    function Remove(i) {
        const rows = [...post];
        rows.splice(i, 1);
        setPost(rows)
    }


    const Add_data = () => {
        const formData = { id, name, username, email, address, website, company }
        // console.log(formData)
        const data = [...post];
        data.push(formData)
        setPost(data)
    }


    return (
        <div>
            <h1>Get Data from json API</h1>
            <Table striped bordered hover variant="info">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Address(city)</th>
                        <th>website</th>
                        <th>Company</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        post.map((item, i) =>
                            <tr key={i}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.address.city}</td>
                                <td>{item.website}</td>
                                <td>{item.company.name}</td>
                                <Button variant="danger" onClick={() => Remove(i)}> Remove</Button>
                            </tr>
                        )
                    }
                </tbody>
            </Table>

            <Form>
                <Row>
                    <hr />
                    <Col>
                        <label>Id</label>
                        <Form.Control placeholder="Enter Id" onChange={e => setId(e.target.value)} />
                    </Col>
                    <Col>
                        <label>Name</label>
                        <Form.Control placeholder="Enter Name" onChange={e => setName(e.target.value)} />
                    </Col>
                    <Col>
                        <label>Username</label>
                        <Form.Control placeholder="Enter Username" onChange={e => setUsername(e.target.value)} />
                    </Col>
                </ Row> <br /> <br />

                <Row>
                    <Col>
                        <label>Email</label>
                        <Form.Control placeholder="Enter Email" onChange={e => setEmail(e.target.value)} />
                    </Col>

                    <Col>
                        <label>Address(City)</label>
                        <Form.Control placeholder="Enter Address(City)" onChange={e => setAddress(e.target.value)} />
                    </Col>
                    <Col>
                        <label>Website</label>
                        <Form.Control placeholder="Enter website" onChange={e => setWebsite(e.target.value)} />
                    </Col>
                </ Row> <br /> <br />

                <Row>
                    <Col>
                        <label>Company</label>
                        <Form.Control placeholder="Enter Company" onChange={e => setCompany(e.target.value)} />
                    </Col>
                    <Col>
                        <br />
                        <Button variant="success" onClick={Add_data}>
                            Submit
                        </Button>
                    </Col>

                </Row >
            </Form>
        </div>
    );
}

export default Getdata;
