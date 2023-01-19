import { useState } from 'react';
import Card from '../Card/Card';
import styles from './Cards.module.css'
import cat from '../../images/cat.png'
const Cards = () => {
    const [cards, setCards] = useState([
        { id: 1, desc: 'Сказочное заморское явсто', name: 'Нямушка', taste: 'с фуа-гра', count: '10 порций', present: 'мышь в подарок', some: '', cat: cat, weight: '0,5 кг', selected: 'Печень утки разварная с артишоками', disabled: false },
        { id: 2, desc: 'Сказочное заморское явсто', name: 'Нямушка', taste: 'с рыбой', count: '40 порций', present: '2 мыши в подарок', some: '', cat: cat, weight: '2 кг', selected: 'Головы щучьи с чесноком да свежайшая сёмгушка.', disabled: false },
        { id: 3, desc: 'Сказочное заморское явсто', name: 'Нямушка', taste: 'с курой', count: '100 порций', present: '5 мышей в подарок', some: 'заказчик доволен', cat: cat, weight: '5 кг', selected: 'Филе из цыплят с трюфелями в бульоне.', disabled: true },
    ])
    return (
        <div className={styles.cards}>
            {
                cards.map((card) =>
                    <div key={card.id} className={styles.one}>
                        <Card card={card} />
                    </div>
                )
            }
        </div>
    );
}

export default Cards;
