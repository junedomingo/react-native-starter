import * as types from '../../constants/actionTypes';
import initialState from '../../reducers/initialState';

export default function (state = initialState.movies, action) {
	switch (action.type) {

		case types.RETRIEVE_NOWPLAYING_MOVIES_SUCCESS:
			return {
				...state,
				nowPlayingMovies: action.nowPlayingMovies
			};
		default:
			return state;
	}
}
