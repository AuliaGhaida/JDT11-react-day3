import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom';
import api from '../../services/api';
import { Button } from 'antd';

const DetailProduct = () => {
  const [product, setProduct] = useState({});
  const param = useParams();
  const navigate = useNavigate();

  const fetchProduct = async (id) => {
    try{
      const url = `/api/v1/products/${id}`;
      const response = await api.get(url);
      const payload = {...response?.data?.data?.product};
      console.log(payload);
      setProduct(payload || {});
    } catch (error) {
      alert (error)
    }
  }

  useEffect(() =>{
    if (param.id) {
      fetchProduct(param.id)
    }
  }, [param.id]);

  return (
    <>
    <p>DetailProduct</p>
    <p>Nama Product: {product?.name}</p>
    <p>Harga: {product?.price}</p>
    <p>Yang Jual: {product?.ownerId?.name}</p>
    <Button type="primary" onClick={() => navigate(-1)}>Pulang</Button>
    </>

  )
}

export default DetailProduct