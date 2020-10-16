import React from 'react'
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Col,
} from 'reactstrap'

function HeaderCard( props ){
    return(
        <Col xs="12" md="6" className="m-0 p-0">
            <Card 
                style={ {backgroundImage: `url(${props.bgImg}`}}
                className="border-0 rounded-0 py-5"
            >
              <CardBody>
                <CardTitle className="font-family-montserrat">{ props.title }</CardTitle>
                <CardSubtitle className="font-family-roboto font-weight-bold">{ props.subTitle }</CardSubtitle>
                <CardText>{ props.text }</CardText>
              </CardBody>
            </Card>
        </Col>
    )
}

export default HeaderCard