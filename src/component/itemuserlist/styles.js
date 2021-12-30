import { StyleSheet } from "react-native"
import Color from "../../utils/color"

const styles = StyleSheet.create({
    userContainer: {
        flexDirection: 'row',
        marginHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 5
    },
    uContainer: {
        flex : 1,
        marginEnd : 15,
        marginStart : 15
    },
    tUserTitle: {
        fontSize: 16,
        color: Color.black,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    tUserDetail: {
        fontSize: 14,
        color: Color.gray,
    },
    imageuser: {
        width: 70,
        height: 70,
    }
})

export default styles;