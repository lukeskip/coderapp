
import React,{useState,useEffect} from 'react';
import ListContext from './ListContext'

export default function ListContextProvider ({children}){

  const [items,setItems] = useState([]);
  const handleNewItem  = text => setNewItem(text);
  const [newItem,setNewItem ] = useState('');

  function addElement(element){
      setItems ([...items,{id:(items.length + 1),label:element,checked:false}]);
  }

  function deleteElement(id){
      let newCart = items.filter(function(item){ 
            return item.id !== id; 
      });

      setItems(newCart);
  }

  function checkElement(id){
      
      let updatedItems = items;

      let item = updatedItems.find(function(found){
          return found.id === id;
      });

      item.checked = true;
     
      setItems(updatedItems);
  }

  

  useEffect(()=>{
    const itemsInit = [
          {
            id: 1,
            label:'Comprar pan',
            checked:"false"
          },
          {
            id: 2,
            label:'Ir a la lavandería',
            checked:"false"
          },
          {
            id: 3,
            label:'Hacer la tarea de react native',
            checked:"false"
          },
    ]
    setItems(itemsInit)
  },[]);

  useEffect(()=>{
    console.log(items);
  },[items]);


    return(
        <ListContext.Provider value={{items,addElement,deleteElement,handleNewItem,newItem,checkElement}}> 
            {children}  
        </ListContext.Provider>
    )
}