import React from 'react'
import { View, Image,Text  } from 'react-native';
import styles from './styles'



const Header = (props) => {

    return (
        <View style={styles.container}>
            {/* <Image style={styles.logo} source={require('../../assets/image/car.png')} /> */}
            <Text  style={styles.logo}>Car City</Text>
            <Image style={styles.menu} source={require('../../assets/image/menu.png')} />
        </View>
    );
};

export default Header;