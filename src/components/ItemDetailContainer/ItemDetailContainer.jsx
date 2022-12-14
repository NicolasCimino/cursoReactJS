import React, { useState, useEffect,useContext } from "react";
import { getItemByID } from "../../services/mockService";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail/ItemDetail";
import "./itemDetailContainer.css"
import ButtonCount from "../Buttons/ButtonCount/ButtonCount";
import { cartContext } from "../../storage/cartContext";

function  ItemDetailContainer() {
    const [product, setProduct] = useState([]);
    // const [cantidad, setCantidad] = useState(1);
    const itemID = useParams().IDproducto;
    const {addToCart} = useContext(cartContext);


useEffect(() => {
    getItemByID(itemID)
      .then((respuesta) => {
          setProduct(respuesta);
    })
    .catch((error) => alert("Item no encontrado"));
    }, [itemID]); 

    function handleAddToCart(valor){
      addToCart(product,valor);
    }
    
    return (
    <>
    <div className="itemDetail">
      <ItemDetail producto ={product}/>
      <ButtonCount stock = {product.stock} finishCount={handleAddToCart}/>   
    </div>
        
    </>
    );
  }
  
  export default ItemDetailContainer;