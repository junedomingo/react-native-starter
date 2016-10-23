import React, { Component, PropTypes } from 'react';
import {
	Text,
	View,
	TouchableOpacity
} from 'react-native';

import styles from './styles/Drawer';

class Drawer extends Component {
	constructor(props) {
		super(props);
	}

	_toggleDrawer() {
		this.props.navigator.toggleDrawer({
			to: 'closed',
			side: 'left',
			animated: true
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.drawerList}>
					<TouchableOpacity>
						<View style={styles.drawerListItem}>
							<Text style={styles.drawerListItemText}>
								Hello!, I'm Drawer
							</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

Drawer.propTypes = {
	navigator: PropTypes.object
};

export default Drawer;
