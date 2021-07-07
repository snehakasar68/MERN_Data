import React, { Component } from 'react'

class FakeStoreSingleData extends Component {
    state={
        products:{},
        msg:" ",
        id:""
    }
    fetchData(){
        const {id}=this.state
        fetch(`https://fakestoreapi.com/products/${id}`).then(res=>res.json())
        .then(res=>
            {
                console.log(res)
                this.setState({products:res,msg:null})
            })
        .catch(error=>{
            console.log(error)
            this.setState({msg:"Error in retreiving data....!!!!"})
        })
    }
    changeHandler=(e)=>{
        this.setState({
            id:e.target.value
        })
    }
    submitHandler=(e)=>{
        e.preventDefault()
        this.fetchData()
    }
    render() {
        const{products,id,msg}=this.state
        return (
            <div className="container">
            <input type="number" value={id} onChange={this.changeHandler}/><br></br><br></br>
            <button onClick={this.submitHandler} className="btn btn-primary">Search</button>
                {products!=null?(
                    <React.Fragment>
                        <h1>Title:-{products.title}</h1>
                        <h2>Category:-{products.category}</h2>
                        <h3>Price:-{products.price}</h3>
                        <p>Decription:-{products.description}</p>
                    </React.Fragment>
                ):(<h1 style={{color:"red"}}>Record Not Available....!!!!!</h1>)}
            </div>
        )
    }
}

export default FakeStoreSingleData
