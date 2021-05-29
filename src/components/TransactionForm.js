import React, { Component } from 'react'

class TransactionForm extends Component {
     
    state = {
        bAccountno : '',
        IFSC : '',
        bName: '',
        amount: ''        
    }

    handleInputChange =(e) => {
        this.setState({
            [e.target.name] : e.target.value


        })
    }
     handleSubmit = e => {
        e.preventDefault()
        this.props.onAddOrEdit(this.state)
     }

    render() {
        return (
            <form onSubmit = {this`.handleSubmit} autoComplete="off">
                <input name="bAccountno" placeholder = "A/C No here." value= {this.state.bAccountno} onChange={this.handleInputChange} /> <br/>
                <input name="IFSC" placeholder = "IFSC Code" value= {this.state.IFSC} onChange={this.handleInputChange} /> <br/>
                <input name="amount" placeholder = "Amount" value= {this.state.amount} onChange={this.handleInputChange} /> <br/>
                <input name="bName" placeholder = "Branch Name here" value= {this.state.bName} onChange={this.handleInputChange} /> <br/>
                <button type="submit" > Submit123</button>
            </form>
           
        )
    }
}
export default TransactionForm