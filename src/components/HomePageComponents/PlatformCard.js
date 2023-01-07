import React from 'react'
import Card from 'react-bootstrap/Card';
function Cards(props) {
    return (
        <Card style={{ width: '16rem' }} className="hover:shadow-xl p-3 bg-blueaccent" >
            <Card.Img variant="top" src={props.src} className="w-40 h-40 rounded-full object-cover self-center m-1 bg-neutral-200 p-6"/>
            <Card.Body className='m-0 p-0'>
                <Card.Title className="text-center text-white">{props.title}</Card.Title>
                <Card.Text className="text-center text-white">{props.desc}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Cards