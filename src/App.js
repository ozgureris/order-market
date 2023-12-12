import Header from "./components/Header";
import Product from "./components/Products"
import {useState, useEffect} from 'react'
import products from "./porduct.json"
import Basket from "./components/Basket";


function App() {

const [money, setMoney] = useState(150);
const [basket, setBasket] = useState([]);
const [total, setTotal] = useState(0);

const resetBasket = () =>{
  setBasket([])
}

useEffect(() =>{
  setTotal(basket.reduce((acc, curr) =>{
    return acc + (curr.amount * (products.find(product => product.id === curr.id).price));
  }, 0))
}, [basket]) 

  return (
    <div className="App">
      <Header total={total} money={money}/>
      <div className="two-row-section">
        <div className="product-container">
          {products.map(product =>(
            <Product basket={basket} total={total} money={money} setBasket={setBasket} product={product}/>
            ))}
        </div>
        <div>
          <Basket resetBasket={resetBasket} total={total} basket={basket} products={products}/>
        </div>
      </div>
    </div>
  );
}

export default App;
