import React from "react";
import styles from './Cart.module.css'

const Cart = () => {
    return (
        <div className={styles.cartcontainer}>
            <div className={styles.header}>
                <div className={styles.date}>12/07/2024</div>
                <div className={styles.editBtn}>EDIT</div>
                <div className={styles.starus}>Preparation</div>
                <div className={styles.address}>28 Avondale Ave Unit 1202 M2N 0K2</div>
            </div>

            <div className={styles.items}>
                <div className={styles.item}>
                    <span className={styles.itemName}>Cola: </span>
                    <span className={styles.itemDetails}>
                        12x Beef, 10x Chicken, 8x Salmon
                    </span>
                </div>

                <div className={styles.items}>
                    <div className={styles.item}>
                        <span className={styles.itemName}>Ible:</span>
                        <span className={styles.itemDetails}>
                            12x Beef, 10x Chicken, 8x Salmon
                        </span>
                    </div>
                </div>

                <div className={styles.items}>
                    <div className={styles.item}>
                        <span className={styles.itemName}>Khanoomi</span>
                        <span className={styles.itemDetails}>
                            12x Beef, 10x Chicken, 8x Salmon
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart ;