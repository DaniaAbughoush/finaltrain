import React, { Component } from 'react'
import Cruddata  from './Cruddata';
import UpdateForm from './UpdateForm'
import axios from 'axios'


export class Favariot extends Component {
constructor(props){
    super(props);
    this.state={
        crudArray:[],
        description:'',
        slugnn:'',
        show:false
    }
}
componentDidMount =async()=>{
const getCrud=await axios.get(`http://localhost:8098/art/fav`)
this.setState({
    crudArray:getCrud.data
})
}
deletItem=async(slug)=>{
    const deleteCrud=await axios.delete(`http://localhost:8098/art/fav/${slug}`)
    this.setState({
        crudArray:deleteCrud.data
    })
}
ShowForm=(des,slug)=>{
    this.setState({
        description:des,
        slugnn:slug,
        show:true
    })

}
updatefav=async(e)=>{
e.preventDefault();
const updateUrl=await axios.put(`http://localhost:8098/art/fav/${this.state.slugnn}`,{ description: this.state.description });

this.setState({
crudArray:updateUrl.data
})
console.log('jj',this.state.description)
}
updatedes=(e)=>
{
    this.setState({
        description:e.target.value})
        console.log(this.state.description)
    }

    render() {
        
        return (
            <div>
                {this.state.show&&
  
                <UpdateForm
                updatefav={this.updatefav}
                updatedes={this.updatedes}
                description={this.state.description}
                />
                }
              <Cruddata cruddata={this.state.crudArray}
              deletItem={this.deletItem}
              ShowForm={this.ShowForm}
              />  
            </div>

        )
    }
}

export default Favariot
