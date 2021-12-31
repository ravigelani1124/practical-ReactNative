import { StyleSheet } from "react-native"
import Color from "../../utils/color";
const styles = StyleSheet.create({
    lcontainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: Color.white
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
        fontWeight : 'bold',
        color : Color.cadetblue
    },
    btnContainer: {
        marginHorizontal: 20,
        marginVertical: 10,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.cadetblue,
        borderRadius: 4,
    },
    btnText: {
        fontSize: 18,
        color:Color.white,
        textAlign: 'center',
        fontWeight : 'bold'
    },
})

export default styles;