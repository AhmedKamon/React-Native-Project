import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 50,
        zIndex: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20

    },
    logo: {
        fontWeight:'bold',
        width: 100,
        height: 100,
    },
    menu: {
        width: 70,
        height: 70,
        color:'white'
    }
})

export default styles;