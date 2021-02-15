import {ACTION} from '../actions/authenticationTypes';

export const addUser = (user) => {
    return {type: ACTION.ADD_USER, payload: user}
}

export const deleteUser = (id) => {
    return {type: ACTION.DELETE_USER, payload: id}
}

export const updateUser = (id) => {
    return {type: ACTION.UPDATE_USER, payload: id}
}