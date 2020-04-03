import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { MdAddCircle  } from 'react-icons/md';
import Site from '../_layouts/site';

import {formatPrice} from '../../util/format';
import api from '../../services/api'


import {
  Banner,
  Poster,
  ProductList,
  Characters,
  Adverts,
  Card,
} from './style';

class Main extends Component {
 state = {
    products: [],
    searchProduct:''
  };
  async componentDidMount(){

    const response = await api.get('/products');
    const data = response.data.map(product=>({
      ...product,
      formatPrice:formatPrice(product.price)
      }))
    this.setState({products:data})



  }
   handleMoreProduct=async ()=>{
    const { products}  = this.state;
    const response = await api.get(`/products?page=${2}`);
    const data = response.data.map(product=>({
      ...product,
      formatPrice:formatPrice(product.price)
      }))

    this.setState({products:products.concat(data)})





  }

  handleAddProduct=product=>{
    const {dispatch}=this.props;

    dispatch({
      type:"ADD_TO_CART",
      product
    })

  }
  handleUpdatePoster=()=>{
    return 'https://obj.ibxk.com.br/layout/bj/especiais/the-witcher-3/assets/images/witcher-main-poster.png';
    // "https://obj.ibxk.com.br/layout/bj/especiais/the-witcher-3/assets/images/witcher-main-poster.png"
  }
  handelSeachProduct=async ()=>{
    const {searchProduct} = this.state;


    const response = await api.get('/products');
    const data = response.data.map(product=>({
      ...product,
      formatPrice:formatPrice(product.price)
      }))

        const filter = data.filter(f=>{
        const expressao = new RegExp(searchProduct,"i")
        return (expressao.test(f.title))
      });


    this.setState({products:filter})
  }
  handleSeach=(e)=>{
    this.setState({searchProduct:e.target.value})

  }
  handleImgMain=(images)=>{
    const imgs = images.filter(f=>f.main ===true)
    const url =  imgs.map(a=> a.url)
    return url[0];

  }

  render() {
    const { products } = this.state;
    return (
      <Site>
        <Banner>
          <Characters>
            <div>
              <img
                src='https://obj.ibxk.com.br/layout/bj/especiais/the-witcher-3/assets/images/witcher-main-poster.png'
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
            oferecemos, para que o nosso público encontre a excelência que
            procura de forma rápida e segura.
          </p>
        </Banner>
        <ProductList>
          {products.map(product=>(

              <li key={product.id}  >
              <Link to={`/product/${product.id}/detail`}>
                <div className="imgs">

                  <img
                    src={this.handleImgMain(product.images)}
                    alt={product.title}
                  />

                </div>
                </Link>
                <p>{product.title}</p>
                <span>{product.formatPrice}</span>
                <button type="button" onClick={()=>this.handleAddProduct(product)}>ADICIONAR AO CARRINHO</button>
              </li>
          ))}

        </ProductList>
        <button onClick={this.handleMoreProduct}>Mais</button>
      </Site>

    );
  }
}

export default connect()(Main);
