import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {LocationCardStyles} from './styles';
import HeartOutline from '../../assets/svg/heart-outline.svg';
import HeartAnim from '../Animations/HeartAnim';

class LocationCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			playAnim: false,
		};
	}

	unLikeRecommendation = () => {
		this.props.toggleLike(this.props.card.id);
	};

	animateHeart = () => {
		this.setState({
			playAnim: true,
		});
		this.props.toggleLike(this.props.card.id);
	};

	render() {
		return (
			<View style={[LocationCardStyles.content, {...this.props.style}]}>
				<View style={[LocationCardStyles.iconWrapper, { backgroundColor: this.props.card.iconBg }]}>{ this.props.card.icon }</View>
				<Text style={LocationCardStyles.title}>{this.props.card.title}</Text>
				<Text style={LocationCardStyles.country}>{this.props.card.country}</Text>

				<View style={LocationCardStyles.bottom}>
					<Text>{this.props.card.likes} likes</Text>
					{
						this.props.card.liked ? (
							<TouchableOpacity onPress={() =>  this.unLikeRecommendation()}  style={LocationCardStyles.touchableLike}>
								<HeartAnim play={this.state.playAnim} />
							</TouchableOpacity>
						) : (
							<TouchableOpacity onPress={() =>  this.animateHeart()} >
								<HeartOutline width={15} height={14}/>
							</TouchableOpacity>
						)
					}
				</View>

			</View>
		)
	}
};

export default LocationCard;
