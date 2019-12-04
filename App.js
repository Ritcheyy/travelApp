import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, StatusBar,} from 'react-native';

import Home from './screens/Home';

import { setCustomText } from 'react-native-global-props';
import {customTextProps} from './assets/styles/GlobalStyles';

setCustomText(customTextProps);

const App = () => {
	return (
		<>
			<StatusBar backgroundColor="#FAFBFB" barStyle="dark-content"/>
			<SafeAreaView>
				<ScrollView contentInsetAdjustmentBehavior="automatic">
                  <Home />
				</ScrollView>
			</SafeAreaView>
		</>
	);
};

export default App;
