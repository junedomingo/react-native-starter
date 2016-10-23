/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import { iconsMap, iconsLoaded } from './utils/AppIcons';
import { registerScreens } from './screens';
import configureStore from './store/configureStore';

const store = configureStore();

registerScreens(store, Provider);

const navigatorStyle = {
	statusBarColor: '#831d19',
	navigationBarColor: '#339999',
	navBarBackgroundColor: '#339999',
	navBarTextColor: '#ffffff',
	navBarButtonColor: '#ffffff',
	statusBarTextColorScheme: 'light',
	navBarHidden: true,
	tabBarButtonColor: 'red',
	tabBarSelectedButtonColor: 'red',
	tabBarBackgroundColor: 'red'
};

class App extends Component {
	constructor(props) {
		super(props);
		iconsLoaded.then(() => {
			this.startApp();
		});
	}

	startApp() {
		Navigation.startTabBasedApp({
			tabs: [
				{
					label: 'Movies',
					screen: 'movieapp.Movies',
					icon: iconsMap['ios-film-outline'],
					selectedIcon: iconsMap['ios-film'],
					title: 'Hello World',
					navigatorStyle
				}
			]
		});
	}
}

export default App;
