import { StyleSheet } from 'react-native';
import Colors from '../../assets/styles/Colors';

const AppBarStyles = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 25,
	},
	toggle: {
		width: 23,
		height: 23,
	},
	profileImage: {
		width: 36,
		height: 36,
	},
});

const HomeStyles = StyleSheet.create({
	container: {
		backgroundColor: Colors.appBackground,
		paddingVertical: 20,
		paddingHorizontal: 35,
	},
	firstHeader: {
		fontSize: 25,
		fontFamily: 'TTNorms-Bold',
		marginBottom: 15,
	},
	subHeader: {
		fontSize: 17,
	},
	locationCards: {
		marginTop: 40,
		marginBottom: 40,
		flexDirection: 'row',
	},
	cardScrollView: {
		paddingBottom: 10,
		marginRight: -35,
		marginLeft: -35,
	},
});

const LocationCardStyles = StyleSheet.create({
	content: {
		height: 231,
		width: 156,
		padding: 16,
		// borderWidth: 1,
		// borderColor: 'red',
		marginRight: 17,
		borderRadius: 12,
		backgroundColor: Colors.white,
		shadowColor: '#F6F6F6',
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 2,
		elevation: 0.2,
	},
	iconWrapper: {
		width: 39,
		height: 39,
		borderRadius: 5,
		marginBottom: 33,
		justifyContent: 'center',
		alignItems: 'center',
	},
	icon: {
		width: 33,
		height: 37,
	},
	title: {
		fontSize: 17,
	},
	country: {
		fontSize: 17,
		fontFamily: 'TTNorms-Bold',
		marginBottom: 70,
	},
	bottom: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		// alignContent: 'center',
	},
	touchableLike: {
		width: 16,
		height: 16,
	},
});

const RecommendedStyles = StyleSheet.create({
	headerWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 60,
	},
	header: {
		fontSize: 20,
		fontFamily: 'TTNorms-Bold',
	},
	viewAll: {
		fontSize: 17,
	},
	card: {
		flexDirection: 'row',
		paddingTop: 14,
		paddingBottom: 17,
		borderRadius: 10,
		marginBottom: 30,
		backgroundColor: Colors.white,
	},
	imgWrapper: {
		flex: 1,
		width: '100%',
	},
	img: {
		height: 110,
		width: '100%',
		borderRadius: 10,
		marginTop: -30,
	},
	details: {
		flex: 2,
		paddingLeft: 18,
	},
	cardHeader: {
		fontFamily: 'TTNorms-Bold',
		fontSize: 21,
	},
	cardSubHeader: {
		fontSize: 15,
	},
	starWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	starContainer: {
		width: 50,
		marginVertical: 15,
		marginRight: 15,
	},
	ratingText: {
		color: '#FFAB42',
	},
	starText: {
		color: '#FFAB42',
		fontSize: 12,
	},
	likeTouchable: {
		width: 16,
		height: 16,
		top: 13,
		right: 13,
		position: 'absolute',
	},
	lottieLike: {
		position: 'absolute',
		right: 0,
		marginTop: -10,
		marginRight: -7,
		backgroundColor: 'blue',
	},
});


export { AppBarStyles, HomeStyles, LocationCardStyles, RecommendedStyles };
