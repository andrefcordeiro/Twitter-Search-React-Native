import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Styles from './Styles'
import { TextInput } from 'react-native-gesture-handler'

export default class Home extends Component {

    state = {
        search: "",
    }

    handleOnPress() {
        if (this.state.search !== "") {
            this.props.navigation.navigate('SearchResult', {
                q: this.state.search
            })
        }
        else {
            alert("Insira uma palavra")
        }
    }

    render() {
        return (
            <View style={Styles.main}>
                <TextInput style={Styles.textInput} placeholder="insira a palavra a ser buscada" onChangeText={(input) => this.setState({ search: input })}>

                </TextInput>
                <TouchableOpacity style={Styles.button} onPress={() => this.handleOnPress()}>
                    <Text style={Styles.text}>BUSCAR</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
