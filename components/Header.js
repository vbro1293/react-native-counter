import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';

//============HEADER COMPONENT
//Renders title and image

const Header = ({ title, imageSource }) => (
	<View style={ styles.headerContainer }>
		<Text style={ styles.title }>{ title }</Text>
		<Image source={ imageSource } style={ styles.image }/>
	</View>
)

//==================STYLES

const styles = StyleSheet.create({
	headerContainer: {
		alignItems: 'center',
	},
	title: {
		fontWeight: 'bold',
		marginVertical: 10,
		fontSize: 40,
		color: '#5a2961',
	},
	image: {
		marginVertical: 5,
		height: 160,
		width: 240,
	},
});

export default Header;