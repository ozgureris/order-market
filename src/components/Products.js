import '../style.css'

const Products = ({ product, basket, setBasket, money, total }) => {

    const basketItem = basket.find(item => item.id === product.id)

    const addBasket = () =>{
        const checkBasket = basket.find(item => item.id === product.id)
        if(checkBasket){
            checkBasket.amount += 1
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
        }
        else{
            setBasket([...basket, {
                id: product.id,
                amount: 1
            }])
        }
    }

    const removeBasket = () =>{
        const currentBasket = basket.find(item => item.id === product.id)
        const basketWithoutCurrent = basket.filter(item => item.id !== product.id);
        currentBasket.amount -= 1
        if(currentBasket.amount === 0){
            setBasket([...basketWithoutCurrent])
        }else{
            setBasket([...basketWithoutCurrent, currentBasket])
        }
    }

  return (
    <>
        <div className="product">
            <img src={product.image} alt="" />
            <h4>{product.name}</h4>
            <span><b>${product.price}</b></span>
            <div className="counter">
                <button className='btn btn-add' disabled={total + product.price > money} onClick={addBasket}>Ekle</button>
                <p>{basketItem && basketItem.amount || 0}</p>
                <button className='btn btn-remove' disabled={!basketItem} onClick={removeBasket}>Çıkart</button>
            </div>
        </div> 
    </>
  )
}

export default Products
