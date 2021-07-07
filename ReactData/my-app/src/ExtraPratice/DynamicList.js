import React, { Component } from 'react'
class DynamicList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            item:"",
             list:[],
             selectValue:""
        }
    }
    handler=(e)=>{
        this.setState({
          item: [e.target.value]
        })
    }
    add=(e)=>{
        var list1=this.state.list;
        list1.push(this.state.item)
        this.setState({
            list:list1,
            item:""
        })
        
        e.preventDefault();
    }
    renderList(){
        let temp=[];
        let list=this.state.list
        for(let i=0;i<list.length;i++){
            temp.push(<option>{list[i]}</option>)
        }
        return temp
    }
    selectHandler=(e)=>{
        console.log("in handler");
        var val=e.target.value
        this.setState({
            selectValue:["Selected Item is:"+val]
        })
        e.preventDefault();
    }
    displayList=()=>{
        let temp=[];
        let list=this.state.list
        temp=list.map(val=><li>{val}</li>)
        return temp
    }
    render() {
        return (
            <form>
                <label>Enter Item:</label>
                <input type="text" value={this.state.item} name="item" onChange={this.handler}/>
                <button onClick={this.add}>Add</button>
                <select onChange={this.selectHandler}>
                    {this.renderList()}
                </select>
                <ul>{this.displayList()}</ul>
                <h1>{this.state.selectValue}</h1>
            </form>
        )
    }
}

export default DynamicList
