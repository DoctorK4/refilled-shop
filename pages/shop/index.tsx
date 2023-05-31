"use client";

import { useState, useEffect } from 'react';
import styles from "@/styles/Shop.module.scss"
import Product from '@/components/Product';
import { getProductList } from '@/hook/api';
import { product } from "@/types/product";

export default function Shop() {
  const [ productList, setProductList ] = useState<product[] | []>([]);
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const updateProductList = async () => {
    const data:product[] = await getProductList();
    setProductList(data);
  };

  useEffect(() => {
    updateProductList();
  }, []);

  return (
    <div className={styles.ShopWrapper}>
      <h2 className={styles.title}>
        사이토카인.<br/>
        <span className={styles.subtitle}>
          완벽한 탈모케어를 위한 선택
        </span>
      </h2>
      <section className={styles.productListWrapper}>
        { !isLoading ?
        productList.map(productInfo => 
          <Product key={productInfo.id} productInfo={productInfo}/>
          ) 
          : null
        }
      </section>
    </div>
  );
};