import axios from 'axios';
import React, {useEffect,useState} from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

/* <!-- Total awards --> */
function Listados(){
    //ENDPOINT CANTIDAD TOTAL USUARIOS
    const [usersList, setUsersList] = useState([])
      useEffect(()=>{
          axios.get('http://localhost:5000/api/users/list')
          .then(({data}) => { 
              console.log(data);
              setUsersList(JSON.stringify(data));
              //console.log('usersList', usersList);
            })
          .catch(e=>console.log(e))
      },[])
    //ENDPOINT CANTIDAD TOTAL PRODUCTOS
    const [products, setProducts] = useState([])
      useEffect(()=>{
          axios.get('http://localhost:5000/api/products')
          .then(({data}) => { 
              console.log(data);
              setProducts(JSON.stringify(data));
              //setProducts(data.length)
              //console.log('products', products);
            })
          .catch(e=>console.log(e))
      },[]);
    //ENDPOINT CANTIDAD TOTAL CATEGORIAS
    const [categoriesList, setCategoriesList] = useState([])
        useEffect(()=>{
            axios.get('http://localhost:5000/api/categorieslist')
            .then(({data}) => { 
                console.log(data);
                setCategoriesList(JSON.stringify(data));
                //setCategoriesList(data.length);
                //console.log('users', users);
            })
            .catch(e=>console.log(e))
        },[])
     
    
let moviesInDB = {
        title: 'LISTADO DE USUARIOS',
        color: 'primary', 
        cuantity: usersList,
        icon: 'fa-clipboard-list'
    };

let totalAwards = {
    title:'LISTADO DE PRODUCTOS', 
    color:'success', 
    cuantity: products,
    icon:'fa-award'
};

/* <!-- Actors quantity --> */

let actorsQuantity = {
    title:'LISTADO DE CATEGORIAS' ,
    color:'warning',
    cuantity:categoriesList,
    icon:'fa-user-check'
};



let cartProps = [moviesInDB, totalAwards, actorsQuantity];


    return (
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            })}
        </div>
    )
}
export default Listados;