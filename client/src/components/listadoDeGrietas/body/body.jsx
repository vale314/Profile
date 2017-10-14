import React from 'react';
import * as Semantic  from 'semantic-ui-react'
import Filtros from './filtros.jsx'
import styles from './style.css'
import AddIcon from 'material-ui-icons/Add';
import ModeEditIcon from 'material-ui-icons/ModeEdit';
import Button from 'material-ui/Button'
import {Container} from 'semantic-ui-react'


const HeaderComponent = ({
    items,
    filters,
    handleChange,
    busqueda
}) => (
    <div>

        <Container style={{textAlign:'-webkit-center'}}>
                <Filtros filters={filters} handleChange={handleChange} busqueda={busqueda} />
                <Semantic.Card.Group style={{textAlign:'center'}}>
        {items.map((value,index)=>{
            return(
                    <Semantic.Card key={index}  style={{textAlign:'center', textAlign:'-webkit-center'}} >
                        <Semantic.Image src='https://i.ytimg.com/vi/6-MAPOFshM0/hqdefault.jpg' />
                        <Semantic.Card.Content>
                        <Semantic.Card.Header>
                            Matthew
                        </Semantic.Card.Header>
                        <Semantic.Card.Meta>
                            <span className='date'>
                            Joined in 2015
                            </span>
                        </Semantic.Card.Meta>
                        <Semantic.Card.Description>
                            Matthew is a musician living in Nashville.
                        </Semantic.Card.Description>
                        </Semantic.Card.Content>
                        <Semantic.Card.Content extra>
                        <a>
                            <Semantic.Icon name='user' />
                            22 Friends
                        </a>
                        </Semantic.Card.Content>
                    </Semantic.Card>
            )
            
        })}
                </Semantic.Card.Group>
           
        <Button fab color="primary" aria-label="add" className='buttonTop'>
                    <AddIcon />
        </Button>
       </Container>

            
    </div>
);

export default HeaderComponent;
