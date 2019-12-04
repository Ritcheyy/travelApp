import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import LottieView from 'lottie-react-native';

export default class HeartAnim extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		if (this.props.play){
			this.animation.play(40, 100);
		} else {
			this.animation.play(90, 100);
		}
	}

	render() {
		const animUri = '../../assets/animations/twitter-heart.json';
		const styles = StyleSheet.create({
			lottieSty: {
				width: 50,
				height: 50,
				transform: [{scale: 1.5}],
				top:  Platform.OS === 'ios' ? -4 : -8,
				right: Platform.OS === 'ios' ? 3.5 : 7,
				position: 'relative',
			},
		});

		return (
			<LottieView style={styles.lottieSty} source={require(animUri)} ref={animation => {this.animation = animation;}} loop={false} colorFilters={[{
				keypath: 'H2',
				color: '#FF6347',
			}]}/>
		);
	}
}
