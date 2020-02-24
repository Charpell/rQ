import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { Text } from './'

export default function ({ renderLeft, title, renderRight, onPressLeft, onPressRight }) {
	return (
		<View style={styles.contain}>
			<View style={{flex: 1}}>
				<TouchableOpacity
					style={styles.contentLeft}
					onPress={onPressLeft}
				>
					{renderLeft()}
				</TouchableOpacity>
			</View>
			<View 
				style={styles.contentCenter}
				>
				<Text primary sfbold size={20} >{title}</Text>
			</View>
			<View style={styles.right}>
				<TouchableOpacity
					style={styles.contentRight}
					onPress={onPressRight}
				>
				</TouchableOpacity>
			</View>
		</View>
	)
}


const styles = StyleSheet.create({
	contain: {
		height: 45, flexDirection: 'row'
	},
    contentLeft: {
        flex: 1,
        justifyContent: "center",
        paddingLeft: 20,
        width: 60
    },
    contentCenter: {
        flex: 2,
        alignItems: "center",
        justifyContent: "center"
    },
    contentRight: {
        justifyContent: "center",
        alignItems: "flex-end",
        paddingLeft: 10,
        paddingRight: 20,
        height: "100%"
    },
    right: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "flex-end"
    }
})