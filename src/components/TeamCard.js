import React from 'react'
import Card from 'react-bootstrap/Card';
function Cards(props) {
    return (
        <Card style={{ width: '14rem' }} className="hover:shadow-xl p-3" >
            <Card.Img variant="top" src={props.src} className="w-40 h-40 rounded-full object-cover self-center m-1"/>
            <Card.Body className='m-0 p-0'>
                <Card.Title className="text-center">{props.title}</Card.Title>
                <Card.Text className="text-center">{props.position}</Card.Text>
                <Card.Text className="text-center">{props.year}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Cards