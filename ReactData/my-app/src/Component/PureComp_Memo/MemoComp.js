import React from 'react'

function MemoComp() {
    console.log("Memo component");
    return (
        <div>
            
        </div>
    )
}

export default React.memo(MemoComp)
