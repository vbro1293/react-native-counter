import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import moment from 'moment';

//===============IMPORT CUSTOM COMPONENTS
import Header from './components/Header';
import Button from './components/Button';
import CounterContainer from './components/CounterContainer';
import History from './components/History';


export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0,
			history: [],
		}
		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
		this.update = this.update.bind(this);
		this.reset = this.reset.bind(this);
	}

	increment(){
		const curCount = this.state.counter;
		const newCount = curCount+1;
		this.setState({
			counter: newCount,
			history: this.update(curCount, newCount),
		});
	}

	decrement(){
		const curCount = this.state.counter;
		const newCount = curCount-1;
		this.setState({
			counter: newCount,
			history: this.update(curCount, newCount),
		});
	}

	update(curCount, newCount){
		const history = this.state.history;
		const nowTime = moment(Date.now()).calendar();
		const newHistory = [{
			date: nowTime,
			count: (newCount > curCount ? "increment" : "decrement") + " from " + curCount + " to " + newCount,
			},
			...this.state.history
			];
		return newHistory;
	}

	reset(){
		this.setState({
			counter: 0,
			history: [],
		})
	}

	render() {
		const isDisabledMin = (this.state.counter === min);
		const isDisabledMax = (this.state.counter === max);
		const isDisabledReset = (this.state.counter === 0) && (this.state.history === []);

		return (
			<View style={ styles.container }>
				<Header title={ "THE COUNT"} imageSource={ theCountImage }/>
				<CounterContainer counter={ this.state.counter } increment={ this.increment } decrement={ this.decrement } min ={ isDisabledMin } max={ isDisabledMax }/>
				<Button title="RESET" onPress={ this.reset } reset={ true } disabled={ isDisabledReset }/>
				<History history={ this.state.history }/>
			</View>
		);
	}
}

//==================VARIBALES

const max = 10;
const min = 0;

//==================REQUIRE IMAGE

const theCountImage = require('./resources/count.jpg');

//==================STYLES

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		marginVertical: 20,
		alignItems: 'center',
	},
});
