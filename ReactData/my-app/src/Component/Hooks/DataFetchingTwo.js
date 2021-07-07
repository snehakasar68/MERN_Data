import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

const initalState = {
    loading: true,
    error: '',
    post: {}
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'fetch_success':
            return { loading: false, 
                post: action.payLoad,
                 error: '' }
        case 'fetch_error':
            return { loading: false, 
                post: {}, 
                error: action.payLoad }
        default:
            return state
    }
}
function DataFetchingTwo() {
    const [state, dispatch] = useReducer(reducer, initalState);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/92`)
            .then(response => {
                dispatch({ type: 'fetch_success', payLoad: response.data });
                console.log(response.data)
            })
            .catch(error => {
                dispatch({ type: 'fetch_error' ,payLoad:"Something went wrong!"});

            })
    }, [])
    return (
        <div>
{state.loading?'Loading........':state.post.title}
{state.error?state.error:null}
        </div>
    )
}

export default DataFetchingTwo
