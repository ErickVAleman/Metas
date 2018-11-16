
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

const _INITIAL_STORE_ = {
	lastUpdate: 0,
	suc: "",
	meta: { monto: "", visible: false },
	up: { monto: "", visible: false },
	dataGraph: [],
};

export const actionsTypes = {
	ADD_SUC: 'ADD_SUC',
	ADD_DATA: 'ADD_DATA',
	ADD_AIM_MONTO: 'ADD_AIM_MONTO',
	ADD_AIM_UP: 'ADD_AIM_UP'

}

// Reducers
export const reducer = ( state = _INITIAL_STORE_, action: any ) =>{
	switch ( action.type ) {
		case actionsTypes.ADD_SUC: 
			return Object.assign({}, state, { lastUpdate: action.ts, suc: action.ADD_SUC })
		case actionsTypes.ADD_DATA:
			return Object.assign({}, state, { lastUpdate: action.ts, dataGraph: action.ADD_DATA })
		case actionsTypes.ADD_AIM_MONTO:
			return Object.assign({}, state, { lastUpdate: action.ts, meta: { monto: action.AIM_MONTO, visible: !!action.AIM_VISIBLE_MONTO } })
		case actionsTypes.ADD_AIM_UP:
			return Object.assign({}, state, { lastUpdate: action.ts, up: { monto: action.AIM_UP, visible: !!action.AIM_VISIBLE_UP } });
		default: return state
	}
}

// Actions
export const _ADD_SUC_ = (suc: string) => ( dispatch: any ) => {
	return dispatch({type: actionsTypes.ADD_SUC, ts: Date.now(), ADD_SUC: suc, });
}

export const _ADD_DATA_ = (data: [{}]) => (dispatch: any) => {
	return dispatch({ type: actionsTypes.ADD_DATA, ts: Date.now(), ADD_DATA: data, });
}

export const _ADD_AIM_MONTO_ = ( aimMonto: string, visible: boolean ) => ( dispatch: any ) => {
	return dispatch({ type: actionsTypes.ADD_AIM_MONTO, ts: Date.now(), AIM_MONTO: aimMonto, AIM_VISIBLE_MONTO: visible, });	
}

export const _ADD_AIM_UP_ = (aimUp: string, visible: boolean ) => (dispatch: any) => {
	return dispatch({ type: actionsTypes.ADD_AIM_UP, ts: Date.now(), AIM_UP: aimUp, AIM_VISIBLE_UP: visible, });
}

export const initStore = ( initialState = _INITIAL_STORE_ ) => {
	return createStore(reducer, _INITIAL_STORE_, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
