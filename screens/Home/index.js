import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Colors from '../../assets/styles/Colors';
import {HomeStyles, RecommendedStyles} from '../../components/Home/styles';
import AppBar from '../../components/Home/AppBar';
import LocationCard from '../../components/Home/LocationCard';
import RecommendedCard from '../../components/Home/RecommendedCard';

import Drop from '../../assets/svg/drop.svg';
import Paw from '../../assets/svg/paw.svg';
import Shape from '../../assets/svg/shape.svg';
import { man, monkey } from '../../assets/images';

class Home extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			cards: [
				{
					id: 1,
					title: 'Water',
					country: 'North America',
					likes: 12,
					icon: <Drop width={14} height={18}/>,
					iconBg: Colors.fadedBlue,
					liked: true,
				},
				{
					id: 2,
					title: 'Wild Life',
					country: 'Africa',
					likes: 10,
					icon: <Paw width={19} height={17}/>,
					iconBg: Colors.fadedGreen,
					liked: false,
				},
				{
					id: 3,
					title: 'High Grounds',
					country: 'Asia',
					likes: 1,
					icon: <Shape width={21} height={16}/>,
					iconBg: Colors.fadedRed,
					liked: false,
				},
			],

			recommendations: [
				{
					id: 1,
					title: 'Hawaii, US',
					subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
					rating: 4,
					liked: false,
					image: man,
				},{
					id: 2,
					title: 'Kampala, Uganda',
					subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
					rating: 5,
					liked: true,
					image: monkey,
				},
			],
		};
	}

	toggleLike = (id) => {
		this.setState({
			recommendations: this.state.recommendations.map(card => {
				card.id === id ? card.liked = !card.liked : '';
				return card;
			}),
		});
	};


	toggleLocationLike = (id) => {
		this.setState({
			cards: this.state.cards.map(card => {
				if (card.id === id){
					card.liked = !card.liked;
					card.liked ? card.likes++ : card.likes--;
				}
				return card;
			}),
		});
	};

	render() {
		return (
			<View style={HomeStyles.container}>
				<AppBar/>
				<Text style={HomeStyles.firstHeader}>Yay, It’s travel time!</Text>
				<Text style={HomeStyles.subHeader}>What would you like to see?</Text>
				<ScrollView horizontal showsHorizontalScrollIndicator={false} style={HomeStyles.cardScrollView}>
					<View style={HomeStyles.locationCards}>
						{
							this.state.cards.map((card, index) => {
								return (<LocationCard key={card.id} card={card} style={{ marginLeft: index === 0 ? 35 : 0 }} toggleLike={this.toggleLocationLike}/>);
							})
						}
					</View>
				</ScrollView>

				<View>
					<View style={RecommendedStyles.headerWrapper}>
						<Text style={RecommendedStyles.header}>Recommended</Text>
						<Text style={RecommendedStyles.viewAll}>View All</Text>
					</View>

					<View>
						{
							this.state.recommendations.map(card => {
								return <RecommendedCard recommendation={card} key={card.id} toggleLike={this.toggleLike}/>;
							})
						}
					</View>
				</View>
			</View>
		);
	}

};

export default Home;
