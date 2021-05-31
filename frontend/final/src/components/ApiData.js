import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

export class ApiData extends Component {
    render() {
        return (
            this.props.apidata.map((dataapi,idx)=>{
return(
    <div key={idx}>

        <h6>{dataapi.title}</h6>
       <h6>{dataapi.artist}</h6>
       <img style={{width:'200px'}}src={dataapi.thumbnail} alt="pic api"/>
            
               <p>{dataapi.description}</p> 
               <button onClick={()=>this.props.addFav(dataapi)}>add to favariot</button>
    </div>
          
)
            })
            
        )
    }
}

export default ApiData
