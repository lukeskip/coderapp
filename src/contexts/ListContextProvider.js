
import React,{useState,useEffect} from 'react';
import ListContext from './ListContext'

export default function ListContextProvider ({children}){

  const [items,setItems] = useState([]);

  function addElement(element){
      setItems ([...items,{id:(items.length + 1),label:element}]);
  }

  function deleteElement(element){
      setItems ([...items,{id:(items.length + 1),label:element}]);
  }

  useEffect(()=>{
    const itemsInit = [
          {
            id: 1,
            label:'Comprar pan'
          },
          {
            id: 2,
            label:'Ir a la lavandería'
          },
          {
            id: 3,
            label:'Hacer la tarea de react native'
          },
    ]
    setItems(itemsInit)
  },[]);


    return(
        <ListContext.Provider value={{items,addElement,deleteElement}}> 
            {children}  
        </ListContext.Provider>
    )
}