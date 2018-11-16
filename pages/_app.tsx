
import React from "react"; 
import App,{ Container } from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { initStore } from "../store";

export default withRedux(initStore)(class MyApp extends App {
	static async getInitialProps({ Component, ctx }: {Component: any, ctx: any}){
		return {
			pageProps: (Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
		}	
	}

	render(){
		const { Component, pageProps, store } = this.props;
		return(<Container>
				<Provider store={store} > 
					<Component {...pageProps} />
				</Provider>
			</Container>
		)
	}
})

