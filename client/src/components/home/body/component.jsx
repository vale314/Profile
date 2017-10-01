import React from 'react'
import { Header } from 'semantic-ui-react'
import style from './body.css'

const MenuComponent=({
  titleChange
})=>(

  <div className='divHome'>
    <Header style={{textAlign:'center', margin:'0px',color:'white'}} as='h1'>{titleChange}</Header>
  </div>
)


export default MenuComponent;