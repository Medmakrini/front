import React from 'react';
import { getPrice } from '../../utils/priceCalculator';
import './package.scss';


function Package({items, discount}) {
    const images = items.map(item => require(`../../assets/images/${item.image}`));
    let totalPrice = 0;
    if(items.length != 0){
        totalPrice = getPrice(items.length, items[0].price, discount);
    }
    return (
        <div className='package'>
            {items.length > 1 && <span className='package__sticker'>{discount}% OFF</span>}
            <div className='package__container'>
            {items.map((item, i) => <div className='package__container__item' key={i}>
                <div className="package__container__item__image">
                    <img src={images[i]} />
                </div>
                <div className="package__container__item__text">
                    {item.name}
                </div>
            </div>)}
            </div>
            <div className="package__total-price">
                TOTAL : <span>{totalPrice} DH</span>
            </div>
        </div>
    );
}

export default Package;