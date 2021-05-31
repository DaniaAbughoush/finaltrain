import React, { Component } from 'react'
import ApiData from './ApiData'
import axios from 'axios'

export class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            apiArr:[],
            showgetdata:false,
            showmessagefav:false,
            message:''
        }
    }
    addFav=async(dataObj)=>{
        console.log('dataObj',dataObj)
        const favPost=await axios.post(`http://localhost:8098/art/fav`,dataObj);
        this.setState({
message:favPost.data,
showmessagefav:true
        })
    }
    componentDidMount=async()=>{
    const severUrl =process.env.REACT_APP_SERVER
        const getUrl=await axios.get(`http://localhost:8098/art`)
        this.setState({
            apiArr:getUrl.data,
          
        })
        console.log(this.state.apiArr)
    }
    render() {
        return (
            <>
            
            <h3>{this.state.message}</h3>

                <ApiData apidata={this.state.apiArr}
                addFav={this.addFav} />
         
            
            {/* {this.state.showmessagefav&& */}

            {/* } */}
            </>
            )
    }
}

export default Main
