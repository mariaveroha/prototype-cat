import styles from './Card.module.css'
import '../../App.css';
import back from '../../images/Back.png'
import borderBlue from '../../images/borderBlue.png'
import borderPink from '../../images/borderPink.png'
import borderDis from '../../images/borderDis.png'
import { useState } from 'react';
const Card = (props) => {
    const [buy, setBuy] = useState('Чего сидишь? Порадуй котэ,')
    const [border, setBorder] = useState(borderBlue)
    const [desc, setDesc] = useState(props.card.desc)
    let disabled = props.card.disabled
    function Select() {
        if (buy !== props.card.selected) {
            setBuy(props.card.selected)
            setBorder(borderPink)
        }
        else {
            setBuy('Чего сидишь? Порадуй котэ,')
            setBorder(borderBlue)
            setDesc(props.card.desc)
        }
    }
    function MouseOver() {
        if (buy == props.card.selected) {
            setDesc('Котэ не одобряет?')
        }
    }
    function MouseOut() {
        if (buy == props.card.selected) {
            setDesc(props.card.desc)
        }
    }
    return (
        <>
            {
                disabled === false ?
                    <div className={styles.card}>
                        <div className={styles.card_content}>
                            <div onClick={Select} onMouseOver={MouseOver} onMouseOut={MouseOut} className={styles.back}>
                                <img className={styles.back_image} src={back} />
                                <img className={styles.border_image} src={border} />
                                <div className={styles.text_card}>
                                    <span className={styles.desc}>{desc}</span>
                                    <span className={styles.name}>{props.card.name}</span>
                                    <span className={styles.taste}>{props.card.taste}</span>
                                    <span className={styles.count}>{props.card.count}</span>
                                    <span className={styles.present}>{props.card.present}</span>
                                    <div className={border === borderBlue ? styles.weight : styles.weightPink}   >{props.card.weight}</div>
                                </div>
                                <img className={styles.cat} src={props.card.cat} />
                            </div>
                            <span className={styles.buy}>{buy} {buy === 'Чего сидишь? Порадуй котэ,' ? <button className={styles.button} onClick={Select}>купи.</button> : null}</span>
                        </div>
                    </div>
                    :
                    <div className={styles.cardDis}>
                        <div className={styles.card_content}>
                            <div className={styles.backDis}>
                                <img className={styles.back_image} src={back} />
                                <img className={styles.border_image} src={borderDis} />
                                <div className={styles.text_card}>
                                    <span className={styles.desc}>{desc}</span>
                                    <span className={styles.nameDis}>{props.card.name}</span>
                                    <span className={styles.tasteDis}>{props.card.taste}</span>
                                    <span className={styles.count}>{props.card.count}</span>
                                    <span className={styles.present}>{props.card.present}</span>
                                    <div className={styles.weightDis}   >{props.card.weight}</div>
                                </div>
                                <img className={styles.cat} src={props.card.cat} />
                            </div>
                            <span className={styles.buyDis}> Печалька, {props.card.taste} закончился.</span>
                        </div>
                    </div>
            }
        </>


    );
}

export default Card;