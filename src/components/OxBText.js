import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class OxBText extends Component {
    render() {
        return (
                <Text {...this.props} style={[this.props.style,{fontFamily:'Oxygen-Bold'}]}> {this.props.children} </Text>
        )
    }
}
