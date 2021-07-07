import {BUY_CAKE} from './cakeTypes'
export const buyCake=(number=2)=>{
    return {type:BUY_CAKE,payload:number}
}