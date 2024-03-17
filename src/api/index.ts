export const addToCart = (obj) => {
  const cart = getCart()
  cart.push(obj)
  localStorage.setItem('cart', JSON.stringify(cart))
}
export const removeFromCart = (obj) => {
  const cart = getCart()
  const index = cart.findIndex(item => item.uid === obj.uid)
  cart.splice(index, 1)
  localStorage.setItem('cart', JSON.stringify(cart))
}

export const addBuy = (obj) => {
  let cart = getCart(), orderList: any = []
  const index = cart.findIndex(order => order.uid === obj.uid)
  if (index > -1) {
    cart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(cart))
  }
  orderList = getOrderList()
  orderList.push(obj)
  localStorage.setItem('order_list', JSON.stringify(orderList))
}

export const getCart = () => {
  return JSON.parse(localStorage.getItem('cart') || '[]')
}

export const getOrderList = () => {
  return JSON.parse(localStorage.getItem('order_list') || '[]')
}