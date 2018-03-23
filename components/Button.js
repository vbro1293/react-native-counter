import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

const Button = ({ title, onPress, disabled, reset }) => {

	const buttonStyle = [
		styles.button,
		disabled ? styles.disabled : null,
		reset ? styles.reset : null
	]

	return(
		<TouchableHighlight style={ buttonStyle } onPress={ onPress } disabled={ disabled }>
			<Text style={ styles.label }>{ title }</Text>
		</TouchableHighlight>
	)
};

//==================STYLES

const styles = StyleSheet.create({
	button: {
		height: 50,
		width: 50,
		margin: 5,
		borderRadius: 5,
		justifyContent: 'center',
		backgroundColor: '#5a2961',
	},
	label: {
		color: '#fff',
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	disabled: {
		backgroundColor: '#999',
	},
	reset: {
		height: 40,
		width: 90,
	}
});

export default Button;