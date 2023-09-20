import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { deleteItemFromCart, setItemInCart } from '../../redux/cart/reducer';
import { Button } from "../button/button";
import './seedling-buy.css';

export const SeedlingBuy = ({ seedling }) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.itemsInCart);
    const isItemInCart = items.some(item => item.id === seedling.id);

    const handleClick = (e) => {
        e.stopPropagation();
        if (isItemInCart) {
            dispatch(deleteItemFromCart(seedling.id));
        } else {
            dispatch(setItemInCart(seedling)); 
        }
    }

    return (
        <div className="seedling-buy">
            <span className="seedling-buy__price">{seedling.price} грн</span>
            <Button 
                type={isItemInCart ? "secondary" : "primary"}
                onClick={handleClick}
            >
                {isItemInCart ? 'Прибрати із кошика' : 'В Кошик'}
            </Button>
        </div>
    )
}
