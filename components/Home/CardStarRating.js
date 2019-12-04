import React from "react";
import StarRating from 'react-native-star-rating';
import { View, Text } from 'react-native';
import {RecommendedStyles} from './styles';

const CardStarRating = (props) => {
	return (
		<View style={RecommendedStyles.starWrapper}>
			<StarRating
				fullStarColor="#FFAB42"
				disabled={true}
				maxStars={props.starCount}
				rating={props.starCount}
				starSize={9}
				containerStyle={RecommendedStyles.starContainer}
			/>
			<Text style={RecommendedStyles.starText}>{props.starCount}/5</Text>
		</View>


	)
};

export default CardStarRating;
