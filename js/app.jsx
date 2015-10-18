let products = {
  "jameson-vulc": {
      id: "jameson-vulc",
      name: "Jameson Vulc",
      price: 64.99,
      imagePath: "img/shoes/jameson-vulc-brown-gum-orig.png",
      gender: "man",
  },

  "marana-x-hook-ups": {
      id: "marana-x-hook-ups",
      name: "Marana X Hook-Up",
      price: 79.99,
      imagePath: "img/shoes/marana-x-hook-ups-black-orig.png",
      gender: "man",
  },

  "jameson-e-lite": {
      id: "jameson-e-lite",
      name: "Jameson E-Lite",
      price: 69.99,
      imagePath: "img/shoes/jameson-e-lite-maroon-orig.png",
      gender: "man",
  },

  "jameson-e-lite-julian-davidson-4": {
      id: "jameson-e-lite-julian-davidson-4",
      name: "Jameson E-Lite Julian Davidson",
      price: 74.99,
      imagePath: "img/shoes/jameson-e-lite-julian-davidson-4-black-gum-orig.png",
      gender: "man",
  },

  "scout-womens-6": {
      id: "scout-womens-6",
      name: "Scout Women's",
      imagePath: "img/shoes/scout-womens-6-teal-orig.png",
      price: 59.99,
      gender: "woman",
  },

  "scout-womens-coco-ho-5": {
      id: "scout-womens-coco-ho-5",
      name: "Scout Women's Coco Ho",
      imagePath: "img/shoes/scout-womens-coco-ho-5-olive-white-orig.png",
      price: 59.99,
      gender: "woman",
  },

  "jameson-2-womens-8": {
      id: "jameson-2-womens-8",
      name: "Jameson 2 Women's",
      imagePath: "img/shoes/jameson-2-womens-8-black-white-gum-orig.png",
      price: 59.99,
      gender: "woman",
  },

  "corby-womens-2": {
      id: "corby-womens-2",
      name: "Corby Women's",
      imagePath: "img/shoes/corby-womens-2-tan-white-orig.png",
      price: 44.99,
      gender: "woman",
  },
};

let SiteTitle = React.createClass({
  render() {
    return (
      <div class="title">
        <h2>Buy Me Shoes</h2>
        <img class="title__heart" src="img/heart.svg"/>
      </div>
    );
  }
});
/*
let Product = React.createClass({
  render() {
    return (
      let { name, price, imagePath } = this.props.product;
      <div class="product">
        <div class="product__display">
          <div class="product__img-wrapper">
            <img class="product__img" src="{imagePath}"/>
          </div>

          <a class="product__add">
            <img class="product__add__icon" src="img/cart-icon.svg"/>
          </a>

          <div class="product__price">
            ${price}
          </div>
        </div>

        <div class="product__description">
          <div class="product__name">
            {name}
          </div>
          <img class="product__heart" src="img/heart.svg"/>
        </div>
      </div>
    );
  }
});

let Products = React.createClass({
  let products = function() {
    let arr = [];
    for(key in products) {
      if(products.hasOwnProperty(key)){
        arr.push(<Product key="{key}" product="{products[key]}"/>;
      }
    }
    return arr;
  };
  render() {
    return (
      <div className="products">
        {products}
      </div>
    );
  }
});
*/
let App = React.createClass({
  // `render` 方法将生成 `buyshoes` 网页的 Virtual DOM。
  renderBackground() {
    return (
      <div class="site">
        <div class="bg">
          <div class="bg__img">
          </div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div class="site">
        {this.renderBackground()}

        <div class="site__main">
          <div class="site__left-sidebar">
            <SiteTitle/>
          </div>

          <div class="site__content">

          </div> <!-- site__content -->
        </div> <!-- site__main -->

        <div class="site__right-sidebar">

        </div>

        <a class="site__right-sidebar-toggle">
          <img src="img/arrow-icon.svg"/>
        </a>
      </div>
    );
  }
});

window.onload = () => {
  // 使用 App 组件替换 `#root` 的 innerHTML。
  React.render(<App/>,document.querySelector("#root"));
}