import { StyleSheet, Dimensions } from 'react-native'

const Styles = StyleSheet.create({
    main: {
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,
        backgroundColor: "#14B3F3",

    },
    tweet: {
        width: Dimensions.get('screen').width - 40,
        backgroundColor: "white",
        marginTop: 15,
        marginBottom: 15,
        borderRadius: 5,
        alignSelf: "center",

    },
    text: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 15,
        paddingBottom: 10,
    },
    profile_image: {
        width: Dimensions.get('screen').width / 10,
        height: Dimensions.get('screen').height / 22,
        marginTop: 10,
        marginLeft: 10,
    },
    text_link: {
        marginLeft: 220,
        marginTop: 20,
        position: "absolute",
        borderRadius: 5,
        width: Dimensions.get('screen').width / 3,
        height: Dimensions.get('screen').height / 20,
        paddingTop: 10,
        paddingLeft: 20,
        fontSize: 15,
        color: "#14B3F3"
    }

})

export default Styles