import React, { useState } from 'react';
import './App.css';

const IconSwitch = ({ icon, onSwitch }) => {
    return (
        <div onClick={onSwitch} style={{ cursor: 'pointer' }}>
            <button className="material-icons">{icon}</button>
        </div>
    );
};

const ShopCard = ({ product }) => {
    return (
        <div className="shop-card">
            <div className='product-name'>{product.name}</div>
            <div className='product-color'>{product.color}</div>
            <img className='product-img' src={product.img}></img>
            <div className='buy'>
              <div className='product-price'>${product.price}</div>
              <button className='btn'>ADD TO CART</button>
            </div>
        </div>
    );
};

const CardsView = ({ cards }) => {
    return (
        <div className="cards-view">
            {cards.map((product, index) => (
                <ShopCard key={index} product={product} />
            ))}
        </div>
    );
};

const ListView = ({ cards }) => {
    return (
      <ul className="list-view">
            {cards.map((product, index) => (
                <li className="list-card" key={index}>
                    <img className='product-img-list' src={product.img}></img>
                    <div className='product-name-list'>{product.name}</div>
                    <div className='product-color'>{product.color}</div>
                    <div className='product-price'>${product.price}</div>
                    <button className='btn'>ADD TO CART</button>
                </li>
            ))}
      </ul>
    );
};

const Store = () => {
    const [layout, setLayout] = useState("cards"); 

    const toggleLayout = () => {
        setLayout((prevLayout) => (prevLayout === "cards" ? "list" : "cards"));
    };

    const currentIcon = layout === "cards" ? "view_list" : "view_module";

    return (
        <div>
            <IconSwitch icon={currentIcon} onSwitch={toggleLayout} />
            {layout === "cards" ? (
                <CardsView cards={products} />
            ) : (
                <ListView cards={products} />
            )}
        </div>
    );
};

export default Store;

const products = [{
  name: "Nike Metcon 2",
  price: "130",
  color: "red",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "blue",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
}, {
  name: "Nike free run",
  price: "170",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
}, {
  name: "Nike Metcon 3",
  price: "150",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
}];