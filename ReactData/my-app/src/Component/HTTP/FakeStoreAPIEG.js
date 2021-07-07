import React, { Component } from 'react'


class FakeStoreAPIEG extends Component {
    state={
        products:[],
        msg:" "
    }
    componentDidMount(){
        this.fetchData();
    }
    fetchData(){
        fetch(`https://fakestoreapi.com/products`).then(res=>res.json())
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
    render() {
        const {msg,products}=this.state
        return (
            <div className="container">
                <table className="table table-striped">
                <thead>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Price</th>
                </thead>
                    <tbody>
                    {products!=null?
                (products.map(pro=>{
                    return(
                    <tr>
                        <td>{pro.id}</td>
                        <td>{pro.title}</td>
                        <td>{pro.price}</td>
                    </tr>)
                    }
                )):(<h1>{msg}</h1>)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default FakeStoreAPIEG
