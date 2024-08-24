import React from 'react'
import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import gif from "/src/assets/load-loading.gif"



const Descricaoproduto = () => {

  const { id } = useParams();
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

     useEffect(() => {
     const fetchProdutos = async () => {
      try {
        const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
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
  }, [id]); 

  
  

  if (loading) return <img src={gif} alt="loading" />;
  if (error) return <p>Erro: {error}</p>;


  return (
    <div className='animeLeft'>
        <Helmet>
        <title> Loja | {produtos.id} </title>
        </Helmet>

    <img src={produtos.fotos[0].src} alt="Foto" className='fotoid' />
    

    <ul className='descricao'> 
    <h1>{produtos.nome}</h1>
    <h2 className='preco'> R$ {produtos.preco}</h2>
    <p>{produtos.descricao}</p>
    </ul>
    </div>
  )
}

export default Descricaoproduto
