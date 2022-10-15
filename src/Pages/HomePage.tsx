import axios from 'axios';
import React, { useEffect } from 'react'
import { Layout } from '../Layout';
import { IItems } from '../Types';

export const HomePage = () => {
  useEffect(() => {
    const getItems = async() => {
      const res = await axios.get<IItems[]>('/items');
    }
    getItems();
  }, [])
  return (
    <Layout>

    </Layout>
  )
}
