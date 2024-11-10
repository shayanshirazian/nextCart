"use client";

import React from 'react';
import styles from '../Styles/Cart.module.css';

const Cart: React.FC = () => {
    return (
        <div className={styles.cartContainer}>
            <div className={styles.header}>
                <p className={styles.date}>12/07/2024</p>
                {/*< img className={styles.editPen} src={editPenIcon} alt='editpenicon' />*/}
                <p className={styles.edit}>Edit</p>
                <div className={styles.statusContainer}>
                    <span className={styles.statusDot}></span>
                    <p className={styles.statusText}>Preparation</p>
                </div>
            </div>
            <p className={styles.address}>28 Avondale Ave Unit 1202 M2N 0K2</p>

            <div className='Line' style={{color:'silver'}}>__________________________________</div>

            <div className={styles.items}>
                <div className={styles.cola}>
                    <span className={styles.item}>Cola:  </span>
                    <span className={styles.itemDetail}>12x Beef, 10x Chicken, 8x Salmon</span>
                </div>

                <div className={styles.Ible}>
                    <span className={styles.item}>Ible:  </span>
                    <span className={styles.itemDetail}>12x Beef, 10x Chicken, 8x Salmon</span>
                </div>

                <div className={styles.Khanoomi}>
                    <span className={styles.item}>khanoomi:  </span>
                    <span className={styles.itemDetail}>12x Beef, 10x Chicken, 8x Salmon</span>
                </div>

            </div>
        </div>
    );
};

export default Cart;
