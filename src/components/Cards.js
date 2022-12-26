import React, {useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Cards(props) {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <Card style={{ width: '18rem' }} className="hover:shadow-xl" data-aos="zoom-in-up" data-aos-duration="800">
            <Card.Img variant="top" src={props.src} className="w-48 h-48 rounded-full object-cover self-center m-1"/>
            <Card.Body>
                <Card.Title className="text-center">{props.title}</Card.Title>
                <Card.Text className="text-center">
                    {props.desc}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Cards