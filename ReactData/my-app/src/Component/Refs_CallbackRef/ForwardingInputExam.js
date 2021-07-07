import React from "react"

const ForwardingInputExam= React.forwardRef((props,ref)=>{
    return(
        <div>
            <input type="text" ref={ref}/>
        </div>
    )
})
export default ForwardingInputExam