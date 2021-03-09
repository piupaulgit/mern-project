export const addItemToCart = (item, next) => {
  let cart = [];
  if (typeof window !== undefined) {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    let isAlreadyInCart;
    cart.filter(cartItem => {
      if(cartItem._id === item._id){
        isAlreadyInCart =  cartItem._id
      }
    });
    if(isAlreadyInCart){
      cart.map(cartItm => {
        if(cartItm._id === isAlreadyInCart){
          cartItm.count += 1
          cartItm.totalPrice = cartItm.price*cartItm.count
        }
      })
    }
    else{
      cart.push({
                ...item,
                count: 1,
                totalPrice: item.price
              });
    }
  
    
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
  }
};

export const loadCart = () => {
  if (typeof window !== undefined) {
    if (localStorage.getItem("cart")) {
      return JSON.parse(localStorage.getItem("cart"));
    }
  }
};


export const removeItemFromCart = (productId) => {
  let cart = []
  if (typeof window !== undefined) {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    cart.map((product,index) => {
      if(product._id === productId)(
        cart.splice(index, 1)
      )
    })
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  return cart;
}