const BasketItem = ({item, product}) => {
  return (
    <div className="card-container">
        <img className="card-image" src={product.image} alt="" />
        <div className="card-info">
          <p>{product.name} x {item.amount}</p>
          <p>{item.amount} of x ${product.price} = ${item.amount * product.price}</p>
      </div>
    </div>
  )
}

export default BasketItem
