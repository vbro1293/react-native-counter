import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import moment from 'moment';

//===============IMPORT CUSTOM COMPONENTS
import Button from './Button';


const CounterContainer = ({ counter, increment, decrement, min, max }) => (
	<View style={ styles.counterContainer }>
		<Button title="-" onPress={ decrement } disabled={ min }/>
		<Text style={ styles.value }>{ counter }</Text>
		<Button title="+" onPress={ increment } disabled={ max }/>
	</View>

)


//==================STYLES

const styles = StyleSheet.create({
	counterContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	value: {
		fontSize: 45,
		fontWeight: 'bold',
		paddingHorizontal: 30,
		color: '#5a2961',
	},
});

export default CounterContainer;