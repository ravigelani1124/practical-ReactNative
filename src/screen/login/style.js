import { StyleSheet } from "react-native"
import Color from "../../utils/color";
const styles = StyleSheet.create({
    lcontainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: Color.azure
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
        textAlign: 'center',
        fontSize: 24,
        paddingVertical: 2,
        marginBottom: 10,
    },
    btnContainer: {
        marginHorizontal: 20,
        marginVertical: 10,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.azure,
        borderRadius: 10,
    },
})

export default styles;