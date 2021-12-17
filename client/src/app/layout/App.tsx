import { Container, CssBaseline } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Catalog from '../../features/catalog/Catalog';
import { Product } from '../models/product';
import Header from './Header';



function App() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
  fetch("http://localhost:5000/api/products").then(response => response.json()).then(data=>setProducts(data))
    }
  , [])
  function addProducts() {
    console.log(products);
    console.log(...products);
    setProducts(prevState => [...prevState, {id: prevState.length, name:"EverWhat", price: 201.31,brand:'some', description:"Description blablabal", pictureUrl:"https://tibiopedia.pl/images/static/npcs/santa_claus.gif", type:"Tibio", quantityInStock: 200} ]);
  }
  return (
    <div className="app">
      <CssBaseline />
      <Header/>   
      <Container>   
       <Catalog products={products} addProduct={addProducts}/>    
      </Container>
    </div>
  );
}

export default App;
