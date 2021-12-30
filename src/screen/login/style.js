import { StyleSheet } from "react-native"
import Color from "../../utils/color";
const styles = StyleSheet.create({
    lcontainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: Color.ivory
    },
    input: {
        marginHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 4,
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 8,
        borderColor: Color.black,
        fontSize: 16,
    },
    titleText: {
        margin: 20,
        fontSize: 30,
        paddingVertical: 2,
        marginBottom: 10,
    },
    btnContainer: {
        marginHorizontal: 20,
        marginVertical: 10,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Color.aliceblue,
        backgroundColor: Color.lavender,
        borderRadius: 4,
    },
    btnText: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight : 'bold'
    },
})

export default styles;