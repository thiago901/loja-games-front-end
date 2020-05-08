import React, { useState, useEffect } from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { GoogleApiWrapper } from 'google-maps-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import { ProductTable, Total, Container, Frete } from './style';
import {
  updateAmountRequest,
  removeFromCart,
} from '../../store/module/cart/actions';
import { formatPrice } from '../../util/format';

function Cart(props) {
  const { google } = props;
  const dispatch = useDispatch();
  const [cep, setCep] = useState('');
  const [frete, setFrete] = useState({ value: 0, text: formatPrice(0) });
  const [total, setTotal] = useState({ value: 0, text: formatPrice(0) });

  const subTotal = useSelector(state => ({
    value: state.cart.cart.reduce((t, product) => {
      return t + product.price * product.amount;
    }, 0),
    text: formatPrice(
      state.cart.cart.reduce((t, product) => {
        return t + product.price * product.amount;
      }, 0)
    ),
  }));

  useEffect(() => {
    function load() {
      setTotal({
        value: Number(subTotal.value) + Number(frete.value),
        text: formatPrice(Number(subTotal.value) + Number(frete.value)),
      });
    }
    load();
  }, [subTotal.value, frete.value]);
  const cart = useSelector(state =>
    state.cart.cart.map(product => ({
      ...product,
      subTotal: formatPrice(product.price * product.amount),
    }))
  );

  function handleRemoveFromCart(id) {
    dispatch(removeFromCart(id));
  }
  async function handleCalcFrete() {
    const origin1 = '05847620';
    const destinationA = cep;

    const service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [origin1],
        destinations: [destinationA],
        travelMode: 'DRIVING',
      },
      function callback(response, status) {
        if (status === 'OK') {
          setFrete({
            value:
              (Number(response.rows[0].elements[0].distance.value) / 1000) *
              1.2,
            text: formatPrice(
              (Number(response.rows[0].elements[0].distance.value) / 1000) * 1.2
            ),
          });
        } else {
          throw new Error('erro');
        }
      }
    );
  }
  function decrement(product) {
    dispatch(updateAmountRequest(product.id, product.amount - 1));
  }
  function increment(product) {
    dispatch(updateAmountRequest(product.id, product.amount + 1));
  }
  function handleSourceImg(images) {
    const imgs = images.filter(f => f.main === true);
    const url = imgs.map(a => a.url);
    return url[0];
  }
  return (
    <>
      <Header />
      <Container>
        <ProductTable>
          <thead>
            <tr>
              <th> </th>
              <th>PRODUTO</th>
              <th>QTD</th>
              <th>SUBTOTAL</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {cart.map(product => (
              <tr key={product.id}>
                <td>
                  <img
                    src={handleSourceImg(product.images)}
                    alt={product.title}
                  />
                </td>
                <td>
                  <strong>{product.title}</strong>
                  <span>{product.formatPrice}</span>
                </td>
                <td>
                  <div>
                    <button type="button" onClick={() => decrement(product)}>
                      <MdRemoveCircleOutline size={20} color="#de4e3a" />
                    </button>
                    <input type="number" readOnly value={product.amount} />
                    <button type="button" onClick={() => increment(product)}>
                      <MdAddCircleOutline size={20} color="#de4e3a" />
                    </button>
                  </div>
                </td>
                <td>
                  <strong>{product.subTotal}</strong>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => handleRemoveFromCart(product.id)}
                  >
                    <MdDelete size={20} color="#de4e3a" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </ProductTable>
        <footer>
          <Link className="finally" to="/payment">
            Finalizar Pedido
          </Link>
          <Total>
            <div>
              <span>Frete</span>
              <strong>{frete.text}</strong>
            </div>
            <div>
              <span>SubTotal</span>
              <strong>{subTotal.text}</strong>
            </div>
            <div className="total">
              <span>Total</span>
              <strong>{total.text}</strong>
            </div>

            <Frete>
              <label htmlFor="">Calcular frete e prazo:</label>
              <input type="text" onChange={e => setCep(e.target.value)} />
              <button type="button" onClick={handleCalcFrete}>
                OK
              </button>
            </Frete>
          </Total>
        </footer>
      </Container>
    </>
  );
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCHPcmTMAdR1suiekHf6rnn5PyRng4pIYw',
})(Cart);
