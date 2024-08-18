import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, name, price, image } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);



  const styles = {
    cartItem: {
      display: 'flex',
      alignItems: 'center',
      margin: '20px 0',
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '5px',
    },
    img: {
      width: '100px',
      height: '100px',
      objectFit: 'cover',
      borderRadius: '5px',
      marginRight: '20px',
    },
    description: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    descriptionP: {
      margin: '5px 0',
    },
    countHandler: {
      display: 'flex',
      alignItems: 'center',
    },
    button: {
      width: '30px',
      height: '30px',
      margin: '0 5px',
      backgroundColor: '#f0f0f0',
      border: 'none',
      cursor: 'pointer',
    },
    input: {
      width: '50px',
      textAlign: 'center',
      border: '1px solid #ddd',
      borderRadius: '3px',
      padding: '5px',
    },
  };

  return (
    <div style={styles.cartItem}>
      <img src={image} alt={name} style={styles.img} />
      <div style={styles.description}>
        <p style={styles.descriptionP}>
          <b>{name}</b>
        </p>
        <p style={styles.descriptionP}>Price: Rs.{price}</p>
        <div style={styles.countHandler}>
          <button
            style={styles.button}
            onClick={() => removeFromCart(id)}
          >
            -
          </button>
          <input
            style={styles.input}
            type="number"
            value={cartItems[id]}
            min="0"
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button
            style={styles.button}
            onClick={() => addToCart(id)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
