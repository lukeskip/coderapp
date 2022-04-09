export function addItem (newElement){
    return {
        type:'ADD_ITEM',
        payload:newElement
    }
}

export function deleteElement (id){
    return {
        type:'DELETE_ELEMENT',
        payload:id
    }
}

export function checkElement (id){
    return {
        type:'CHECK_ELEMENT',
        payload:id
    }
}