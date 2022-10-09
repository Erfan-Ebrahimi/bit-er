import React from 'react';

//      STYLE      //
import styles from "../styles/Coin.module.css";


const Coin = ({name , image , symbol , price , marketCap , priceChange}) => {    //destructurig kardim az props
    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt="img"/>
            <span className={styles.name}>{name}</span>
            <span className={styles.symbol}>{symbol.toUpperCase()}</span>
            <span className={styles.currentPrice}>$ {price.toLocaleString()}</span>
            <span className={priceChange > 0 ? styles.greenPriceChange : styles.redPriceChange}>% {priceChange.toFixed(2)}</span>
            <span className={styles.marketCap}>$ {marketCap.toLocaleString()}</span>
        </div>
    );
};

export default Coin;