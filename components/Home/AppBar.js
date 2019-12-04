import React from 'react';
import { View, Image } from 'react-native';
import { profilePix , navToggle} from '../../assets/images';
import { AppBarStyles } from './styles';

const AppBar = () => {
	return (
		<View style={AppBarStyles.wrapper}>
			<View><Image source={ navToggle } style={AppBarStyles.toggle}/></View>
			<View><Image source={ profilePix } style={AppBarStyles.profileImage}/></View>
		</View>
	);
};

export default AppBar;
