import React from 'react'
import { Container, Divider, Card, Icon, Image, Rating, Header, Button } from 'semantic-ui-react'


const Grieta = ({

})=>(
    <div style={{margin:0}}>
        <Container style={{textAlign:'-webkit-center'}}  >
            <Card fluid={true}>
                <Image src='https://assets.metrolatam.com/mx/2017/01/24/whatsapp-image-2017-01-24-at-14-39-54-1200x600.jpg' />
                <Card.Content>

                <Card.Header>
                    Ciudad: Mexico
                </Card.Header>
                <Card.Meta>
                    <span className='date'>
                    Joined in 2017
                    </span>
                </Card.Meta>
                <Card.Description>
                    Matthew is a musician living in Nashville.
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <strong>Peligro <br/></strong>
                <a>
                    <Rating defaultRating={3} maxRating={5} disabled />
                
                </a>
                </Card.Content>
            </Card>
        </Container>
        <Container style={{marginTop:'50px'}}>
            <Header as='h1' textAlign='center' >Revisiones</Header>
        </Container>
        <Container style={{marginTop:'70px'}}>
            <Card.Group>
                <Card fluid={true}>
                    <Card.Content>
                        <Image floated='right' size='mini' src='/assets/images/avatar/large/steve.jpg' />
                        <Card.Header>
                            Steve Sanders
                        </Card.Header>
                        <Card.Meta>
                            Ingeniero
                        </Card.Meta>
                        <Card.Description>
                            Steve wants to add you to the group <strong>best friends</strong>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        
                    <strong>Peligro <br/></strong>
                        
                        <a>
                            <Rating defaultRating={3} maxRating={5} disabled />
                        
                        </a>
                    </Card.Content>

                </Card>
                <Card fluid={true}>
                    <Card.Content>
                        <Image floated='right' size='mini' src='/assets/images/avatar/large/molly.png' />
                        <Card.Header>
                            Molly Thomas
                        </Card.Header>
                        <Card.Meta>
                            Ingeniero
                        </Card.Meta>
                        <Card.Description>
                            Molly wants to add you to the group <strong>musicians</strong>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <strong>Peligro <br/></strong>
                        <a>
                            <Rating defaultRating={3} maxRating={5} disabled />
                        
                        </a>
                    </Card.Content>
                </Card>

            </Card.Group>
            <div style={{marginTop:'50px', marginBottom:'50px'}}>
                <Button primary>Registra Tu Revision</Button>
            </div>    
        </Container>    
    </div>    
)



export default Grieta