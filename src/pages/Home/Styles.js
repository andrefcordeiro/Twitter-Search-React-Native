import { StyleSheet, Dimensions } from 'react-native'

const Styles = StyleSheet.create({

    main: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#14B3F3",
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height,
    },
    button: {
        backgroundColor: "#FBFDFC",
        width: Dimensions.get("screen").width / 2,
        height: Dimensions.get("screen").height / 10,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        borderColor: "#E9EAEA",
        borderWidth: 1,
        borderRadius: 5

    },
    textInput: {
        backgroundColor: "#FBFDFC",
        width: Dimensions.get("screen").width - 50,
        height: Dimensions.get("screen").height / 10,
        alignSelf: "center",
        marginBottom: 20,
        borderColor: "#E9EAEA",
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,

    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#14B3F3"
    }
})


export default Styles