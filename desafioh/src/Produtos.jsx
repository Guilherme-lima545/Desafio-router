import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';


const Produtos = () => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

     useEffect(() => {
     const fetchProdutos = async () => {
      try {
        const response = await fetch('https://ranekapi.origamid.dev/json/api/produto');
        if (!response.ok) {
          throw new Error('Erro na requisição');
        }
         const data = await response.json();


        
       setProdutos(data); 
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); 
      }
    };

    fetchProdutos();
  }, []); 

  if (loading) return ;
  if (error) return <p>Erro: {error}</p>;
 


  


  return (
    <>
        <Helmet>
        <title> Loja  </title>
        </Helmet>

    {produtos.map((produtos) => 
      <li key={produtos.id} className='animeLeft'> 
       <Link to={produtos.id}>  <img src={produtos.fotos[0].src}  /> </Link>
        <h1> {produtos.nome}</h1>
      </li>)}
    </>
  )
}

export default Produtos

