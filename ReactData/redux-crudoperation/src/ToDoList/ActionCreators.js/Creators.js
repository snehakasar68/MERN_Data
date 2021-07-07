import { ADD_DATA, DELETE_DATA, UPDATE_DATA } from "../ToDoTypes/Action"

export function addData(task)
{
    return {
    type:ADD_DATA,
    payload:task
    }
}
export function deleteData(id)
{
    return {
    type:DELETE_DATA,
    payload:id
    }
}
export function updateData(obj)
{
    return {
    type:UPDATE_DATA,
    payload:obj
    }
}
