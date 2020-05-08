import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { MdAddCircle } from 'react-icons/md';

import Site from '../_layouts/site';
import { formatPrice } from '../../util/format';
import api from '../../services/api';
import { addToCartRequest } from '../../store/module/cart/actions';

import {
  Banner,
  Poster,
  ProductList,
  Characters,
  Adverts,
  Card,
} from './style';

export default function Main() {
  const [products, setProducts] = useState([]);
  const [searchProduct, setSearchProduct] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    async function load() {
      const response = await api.get('/products');
      const data = response.data.map(product => ({
        ...product,
        formatPrice: formatPrice(product.price),
      }));
      setProducts(data);
    }
    load();
  }, []);

  async function handleMoreProduct() {
    const response = await api.get(`/products?page=${2}`);
    const data = response.data.map(product => ({
      ...product,
      formatPrice: formatPrice(product.price),
    }));
    setProducts(products.concat(data));
  }

  function handleAddProduct(id) {
    dispatch(addToCartRequest(id));
  }

  function handleUpdatePoster() {
    return 'https://obj.ibxk.com.br/layout/bj/especiais/the-witcher-3/assets/images/witcher-main-poster.png';
    // "https://obj.ibxk.com.br/layout/bj/especiais/the-witcher-3/assets/images/witcher-main-poster.png"
  }
  async function handelSeachProduct() {
    const response = await api.get('/products');
    const data = response.data.map(product => ({
      ...product,
      formatPrice: formatPrice(product.price),
    }));

    const filter = data.filter(f => {
      const expressao = new RegExp(searchProduct, 'i');
      return expressao.test(f.title);
    });
    setProducts(filter);
  }
  function handleSeach(e) {
    setSearchProduct(e.target.value);
  }
  function handleImgMain(images) {
    const imgs = images.filter(f => f.main === true);
    const url = imgs.map(a => a.url);
    return url[0];
  }

  return (
    <Site>
      <Banner>
        <Characters>
          <div>
            <img
              src="https://obj.ibxk.com.br/layout/bj/especiais/the-witcher-3/assets/images/witcher-main-poster.png"
              alt="Gerald"
            />
          </div>
          <div>
            <img
              src="https://i.pinimg.com/originals/e0/13/66/e01366d166e79f1095aa0b426f233422.png"
              alt="Chrase"
            />
          </div>
        </Characters>
        <Poster>
          <img
            src="https://i.pinimg.com/originals/b8/63/59/b863592195b73a3a30e07f21d1809481.png"
            alt="Personagem"
          />
        </Poster>
        <Adverts>
          <Card>
            <div>
              <p>Mortal Kombat</p>
              <span>R$ 80,00</span>
            </div>
            <img
              src="https://images-submarino.b2w.io/produtos/01/00/oferta/134163/8/134163876_1GG.jpg"
              alt="Gerald"
            />
            <MdAddCircle size={36} color="#000" />
          </Card>
          <Card>
            <div>
              <p>Mortal Kombat</p>
              <span>R$ 80,00</span>
            </div>
            <img
              src="https://images-submarino.b2w.io/produtos/01/00/oferta/134163/8/134163876_1GG.jpg"
              alt="Gerald"
            />
            <MdAddCircle size={36} color="#000" />
          </Card>
        </Adverts>
        <p className="text">
          A CompreGames.com é uma loja de comércio eletrônico que preza
          qualidade, variedade e fidelidade na seleção dos produtos que
          oferecemos, para que o nosso público encontre a excelência que procura
          de forma rápida e segura.
        </p>
      </Banner>
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.id}/detail`}>
              <div className="imgs">
                <img src={handleImgMain(product.images)} alt={product.title} />
              </div>
            </Link>
            <p>{product.title}</p>
            <span>{product.formatPrice}</span>
            <button type="button" onClick={() => handleAddProduct(product.id)}>
              ADICIONAR AO CARRINHO
            </button>
          </li>
        ))}
      </ProductList>
      <button type="button" onClick={handleMoreProduct}>
        Mais
      </button>
    </Site>
  );
}
