import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { MdAddCircle,MdShoppingBasket, MdSearch } from 'react-icons/md';

import {formatPrice} from '../../util/format';
import api from '../../services/api'


import {
  Container,
  Banner,
  Poster,
  ProductList,
  Characters,
  Adverts,
  Card,
  Header,
  InputSearch
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
        console.log((expressao.test(f.title)));

        return (expressao.test(f.title))
      });
      console.log(filter);

    this.setState({products:filter})
  }
  handleSeach=(e)=>{
    this.setState({searchProduct:e.target.value})

  }
  handleImgMain=(p)=>{
   const img= p.images.find(f=>{
      return f.main===true;
    })

      if(img){
        return img.image;
      }






  }

  render() {
    const { products } = this.state;


    return (
      <>

        <Container>
        <Header>
            <Link to="/">
              <h1>CompreGames.com</h1>
            </Link>
            <ul>
              <li>Games</li>
              <li>Consoles</li>
              <li>Promoções</li>
              <li>Novidades</li>
            </ul>
            <InputSearch>
              <input type="text" onChange={this.handleSeach} />
              <MdSearch color="#fff" size={26} onClick={this.handelSeachProduct}/>
            </InputSearch>
            <Link to="/cart">
              <div className="shopping-basket">
                {0}
                <MdShoppingBasket color="#fff" size={36} />
              </div>
            </Link>
        </Header>
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
                      src={this.handleImgMain(product)}
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
        </Container>
      </>
    );
  }
}

export default connect()(Main);
