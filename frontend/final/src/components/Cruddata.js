import React, { Component } from 'react'

export class Cruddata extends Component {
    render() {
        return (
            this.props.cruddata.map((dataapi,idx)=>{
                return(
            <div key={idx}>
                 <h6>{dataapi.title}</h6>
       <h6>{dataapi.artist}</h6>
       <img style={{width:'200px'}}src={dataapi.thumbnail} alt="pic api"/>
            
               <p>{dataapi.description}</p> 
               <button onClick={()=>this.props.deletItem(dataapi.slug)}>delete</button>
               <button onClick={()=>this.props.ShowForm(dataapi.description,dataapi.slug)}>UPDATE</button>

            </div>
                )

            })
        )
    }
}

export default Cruddata
