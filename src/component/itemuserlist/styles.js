import { StyleSheet } from "react-native"
import Color from "../../utils/color"

const styles = StyleSheet.create({
    userContainer: {
        
        marginTop: 10,
        marginStart: 20,
        marginEnd: 20,
        padding: 15,
        marginBottom: 5,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: Color.lavenderDark,
        backgroundColor: Color.lavender,
        borderRadius: 4
    },
    uContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'flex-start',
        marginEnd: 15,
        marginStart: 15,
    },
    tUserTitle: {
        fontSize: 16,
        color: Color.black,
        fontWeight : 'bold',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    imageuser: {
        width: 70,
        height: 70,
        borderRadius: 4,
    }
})

export default styles;