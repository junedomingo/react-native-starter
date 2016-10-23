import React, { PropTypes, Component } from 'react';
import {
	RefreshControl,
	ScrollView,
	Text,
	TouchableOpacity,
	View
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as moviesActions from './movies.actions';

import styles from './styles/Movies';

class Movies extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.actions.retrieveNowPlayingMovies();
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>Welcome</Text>
			</View>
		);
	}
}

Movies.propTypes = {
	actions: PropTypes.object.isRequired,
	nowPlayingMovies: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		nowPlayingMovies: state.movies.nowPlayingMovies,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(moviesActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
