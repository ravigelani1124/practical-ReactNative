import { StyleSheet } from "react-native"
import Color from "../../utils/color"

const styles = StyleSheet.create({
    uContainer: {
        backgroundColor: Color.white,
        paddingTop: 30,
        paddingBottom: 30,
        paddingStart: 20,
        paddingEnd: 20,
        flex: 1,
    },
    innerContainer: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: "flex-start",
        marginBottom: 10,
        alignItems: 'flex-start'
    },
    detailsContainer: {
        marginTop: 20
    },
    userImage: {
        width: 120,
        height: 120,
        marginEnd: 20,
        borderRadius: 15,
        resizeMode: 'cover'
    },
    textHeader: {
        fontSize: 26,
        color: Color.cadetblue,
        marginTop: 20,
        marginBottom: 30,
        fontWeight: 'bold',
        justifyContent: 'center',
    },

    textTitle: {
        fontSize: 18,
        color: Color.cadetblue,
        fontWeight: 'bold',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    text: {
        paddingVertical: 2,
        fontSize: 14,
        color: Color.black,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    contactContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'row'
    },
    contactButton: {
        width: 35,
        height: 35,
        marginEnd: 25,
        marginTop: 25,
    }
})


export default styles;