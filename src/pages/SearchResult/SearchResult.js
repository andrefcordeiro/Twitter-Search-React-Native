import React, { Component } from 'react'
import { Text, View, ScrollView, Image, Linking } from 'react-native'
import Styles from './Styles'
import { RotationGestureHandler, TouchableOpacity } from 'react-native-gesture-handler'
import twitter, { auth } from 'react-native-twitter';
import Config from "../../../Config"

const { rest } = twitter({
    consumerKey: Config.CONSUMER_KEY,
    consumerSecret: Config.CONSUMER_SECRET,
    accessToken: Config.ACCESS_TOKEN,
    accessTokenSecret: Config.ACCESS_TOKEN_SECRET
})

export default class SearchResult extends Component {

    state = {
        tweets: [],
    }

    loadTweets = async () => {
        const params = {
            q: this.props.route.params.q,
            count: 5,
            lang: 'pt'
        }

        var data = await rest.get('search/tweets', params)
        var tweets = []
        for (let tweet in data.statuses) {
            tweets.push(
                {
                    text: data.statuses[tweet].text,
                    screen_name: data.statuses[tweet].user.screen_name,
                    profile_image: data.statuses[tweet].user.profile_image_url,
                    link: "https://twitter.com/statuses/" + data.statuses[tweet].id_str,
                })
        }
        this.setState({ tweets: tweets })
    }

    handleOnPress(url) {

        Linking.openURL(url);

    }

    componentDidMount() {
        console.log("Parametros \nq: " + this.props.route.params.q)
        this.loadTweets()
    }

    render() {
        return (
            <ScrollView style={Styles.main}>
                {
                    this.state.tweets.map((tweet) => {
                        return (
                            <View key={tweet.screen_name} style={Styles.tweet}>
                                <View style={{ flexDirection: "row", marginBottom: 10, alignItems: "center" }} >
                                    <Image source={{ uri: tweet.profile_image }} style={Styles.profile_image} />
                                    <Text style={Styles.text}> @{tweet.screen_name}</Text>
                                    <Text style={Styles.text_link} onPress={() => this.handleOnPress(tweet.link)}> Ir para o tweet</Text>
                                </View>
                                <Text style={Styles.text}> {tweet.text} </Text>
                            </View>
                        )
                    })
                }
            </ScrollView>
        )
    }
}
