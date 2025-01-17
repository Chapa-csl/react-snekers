import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, addToFavorites } from "../../redux/addToCartAction";
import styles from "./Card.module.scss";

function Card({ id, title, imageUrl, price, favorited = false }) {
	const dispatch = useDispatch();
	const [isAdded, setIsAdded] = React.useState(false);
	const [isFavorite, setIsFavorite] = React.useState(favorited);

	const onClickPlus = () => {
		dispatch(addToCart({ id, title, imageUrl, price }));
		setIsAdded(!isAdded);
	};

	const onClickFavorite = () => {
		dispatch(addToFavorites({ id, title, imageUrl, price }));
		setIsFavorite(!isFavorite);
	};

	return (
		<div className={styles.card}>
			<div className={styles.favorite} onClick={onClickFavorite}>
				<img
					src={isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"}
					alt="Unliked"
				/>
			</div>
			<img width={133} height={112} src={imageUrl} alt="Sneakers" />
			<h5>{title}</h5>
			<div className="d-flex justify-between align-center">
				<div className="d-flex flex-column">
					<span>Цена:</span>
					<b>{price} руб.</b>
				</div>
				<img
					className={styles.plus}
					onClick={onClickPlus}
					src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
					alt="Plus"
				/>
			</div>
		</div>
	);
}

export default Card;
