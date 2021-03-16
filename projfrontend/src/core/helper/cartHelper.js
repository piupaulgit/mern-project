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
export const handleCountChange = (productId,count) => {
  let cart = []
  if (typeof window !== undefined) {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    cart.map((product,index) => {
      if(product._id === productId)
        product.count = count
        product.totalPrice = product.count * product.price
    })
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  return cart;
}


// wishlist
export const addItemToWishlist = (item,next) => {
  let cartWishlist = [];
  if (typeof window !== undefined) {
    if (localStorage.getItem("cartWishlist")) {
      cartWishlist = JSON.parse(localStorage.getItem("cartWishlist"));
    }
    let isAlreadyInwishlist;
    cartWishlist.filter(wishlistItem => {
      if(wishlistItem._id === item._id){
        isAlreadyInwishlist =  wishlistItem._id
      }
    });
    if(!isAlreadyInwishlist){
      cartWishlist.push({
        ...item,
      });
    }
    localStorage.setItem("cartWishlist", JSON.stringify(cartWishlist));
    next();
  }
}


export const loadWishlist = () => {
  if (typeof window !== undefined) {
    if (localStorage.getItem("cartWishlist")) {
      return JSON.parse(localStorage.getItem("cartWishlist"));
    }
  }
};

export const removeItemFromWishlist = (productId) => {
  let cartWishlist = []
  if (typeof window !== undefined) {
    if (localStorage.getItem("cartWishlist")) {
      cartWishlist = JSON.parse(localStorage.getItem("cartWishlist"));
    }
    cartWishlist.map((product,index) => {
      if(product._id === productId)(
        cartWishlist.splice(index, 1)
      )
    })
    localStorage.setItem("cartWishlist", JSON.stringify(cartWishlist));
  }
  return cartWishlist;
}