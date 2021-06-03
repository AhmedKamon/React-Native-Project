import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'


const StyledButton = (props) => {

    const type = props.type;
    const content = props.content;
    const onPress = props.onPress;
    const backgroundColor = type == 'primary' ? '#0000FF' : '#800080';
    const textColor = type == 'primary' ? 'white' : 'black';

    return (
        <View style={styles.container}>
            <Pressable
                onPress={() => onPress()}
                style={[styles.button, { backgroundColor: backgroundColor }]}
            >
                <Text style={[styles.text, { color: textColor }]}>{content}</Text>
            </Pressable>


        </View>
    );
};

export default StyledButton;