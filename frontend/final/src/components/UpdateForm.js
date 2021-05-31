import React, { Component } from 'react'
// import {Form,Button} from 'react-bootstrap'

export class UpdateForm extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.updatefav}>
                    {/* <Form.Group> */}
                        <label>
update descreption
                        </label>
                        <input type="text" value={this.props.description} onChange={this.props.updatedes}/>
                    {/* </Form.Group> */}
                <button type="submit" >UPDAT now</button>
                </form>
            </div>
        )
    }
}

export default UpdateForm
