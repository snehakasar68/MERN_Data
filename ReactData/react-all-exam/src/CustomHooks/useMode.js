import React ,{useState,useEffect}from 'react'

function useMode(status) {
    const [bgCol, setBgCol] = useState('')
    const [col, setCol] = useState('')
    const [isClick, setClick] = useState(false)
    useEffect(() => {
       if(status){
        setBgCol('black')
        setCol('white')
        setClick(true)
       }
        else{
            setBgCol('white')
            setCol('black')
            setClick(false)
        }
    })
    return [bgCol,col,isClick]
}

export default useMode
