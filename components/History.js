import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import moment from 'moment';

const History = ({ history }) => (

	<View style={ styles.historyContainer }>
		<Text style={ styles.history }>History</Text>
		<ScrollView style={ styles.scroll }>
			{ history.map((value, i) => (
				<Text key={ i }>{ value.date } - { value.count }</Text>
				))}
		</ScrollView>
	</View>
)
//==================STYLES

const styles = StyleSheet.create({
	historyContainer: {
		flex: 1,
		alignItems: 'center',
	},
	history: {
		fontSize: 20,
		fontWeight: 'bold',
		marginVertical: 5,
		color: '#5a2961',
	},
	scroll: {
		flex:1 ,
		marginTop: 5,
	},
});

export default History;