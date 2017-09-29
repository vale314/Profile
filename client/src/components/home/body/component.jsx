import React from 'react'
import { Header } from 'semantic-ui-react'

const MenuComponent=({
  titleChange
})=>(

  <div style={{			
    backgroundImage: "url('https://inassets1-internationsgmbh.netdna-ssl.com/image/static_2048_1152/static/bundles/internationsseo/frontend/images/localcommunityHero/72.jpg')",
    backgroundPosition: 'center center',
    backgroundRepeat:  'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize:  'cover',
    backgroundColor: '#999',
    height:'-webkit-fill-available',
    paddingTop:'9%'}}>
    <Header style={{textAlign:'center', margin:'0px',color:'white'}} as='h1'>{titleChange}</Header>
  </div>
)


export default MenuComponent;