import React from 'react';
import * as Semantic  from 'semantic-ui-react'
import Filtros from './filtros.jsx'
import styles from './style.css'

const HeaderComponent = ({
    items,
    filters,
    handleChange,
    busqueda
}) => (
    <div className='divImage'>
                <Filtros filters={filters} handleChange={handleChange} busqueda={busqueda} />
                <Semantic.Card.Group style={{textAlign:'center', textAlign:'-webkit-center',paddingLeft:'15%', paddingRight:'15%', width:`${window.innerWidth}px`}}>
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
        
    </div>  
);

export default HeaderComponent;
