import React, { Component } from "react";
import { linkData } from "./linkData";
import { socialData } from "./socialData";
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    cartItems: 5,
    links: linkData,
    socialLinks: socialData,
    cart: [],
  };
  handleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };
  handleCart = () => {
    this.setState({ cartOpen: !this.state.cartOpen });
  };

  closeCart = () => {
    console.log(1);
    this.setState({ cartOpen: false });
  };

  openCart = () => {
    this.setState({ cartOpen: true });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          handleCart: this.handleCart,
          handleSidebar: this.handleSidebar,
          closeCart: this.closeCart,
          openCart: this.openCart,
          ...this.state,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
