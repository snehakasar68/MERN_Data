import { connect } from "react-redux"
import { buyCake } from "./CakeAction"

const CakeContainer=(props)=>{
    return(
        <div>
            <h1>Number of Cake:{props.numOfCake} </h1>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}
const mapStateToProps=state=>{
    return {
        numOfCake:state.numOfCake
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        buyCake :()=>dispatch(buyCake())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)