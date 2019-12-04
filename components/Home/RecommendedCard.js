import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {RecommendedStyles} from './styles';
import CardStarRating from './CardStarRating';
import HeartOutline from '../../assets/svg/heart-outline.svg';
import HeartAnim from '../Animations/HeartAnim';

class RecommendedCard extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			playAnim: false,
		};
	}

	unLikeRecommendation = () => {
		this.props.toggleLike(this.props.recommendation.id);
	};

	animateHeart = () => {
		this.setState({
			playAnim: true,
		});
		this.props.toggleLike(this.props.recommendation.id);
	};

	render() {
		return (
			<View style={RecommendedStyles.card}>
				<View style={RecommendedStyles.imgWrapper}>
					<Image source={this.props.recommendation.image} style={RecommendedStyles.img} />
				</View>

				<View style={RecommendedStyles.details}>
					<Text style={RecommendedStyles.cardHeader}>{this.props.recommendation.title}</Text>
					<CardStarRating starCount={this.props.recommendation.rating}/>
					<Text style={RecommendedStyles.cardSubHeader}>{this.props.recommendation.subtitle}</Text>
				</View>

				{
					this.props.recommendation.liked ? (
						<TouchableOpacity onPress={() =>  this.unLikeRecommendation()} style={RecommendedStyles.likeTouchable}>
							<HeartAnim play={this.state.playAnim} />
						</TouchableOpacity>
					) : (
							<TouchableOpacity onPress={() =>  this.animateHeart()} style={RecommendedStyles.likeTouchable}>
								<HeartOutline width={15} height={14}/>
							</TouchableOpacity>
					)
				}
			</View>
		);
	}

};

export default RecommendedCard;
