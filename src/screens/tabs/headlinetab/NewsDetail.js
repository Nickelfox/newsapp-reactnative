import React, { Component } from 'react'
import { SafeAreaView } from 'react-native'
import WebView from 'react-native-webview';
import CircleButton from '../../../components/CircleButton';

export default class NewsDetail extends Component {
    constructor(props){
        super(props)
        console.log(this.props.navigation.getParam('url'))
    }
    render() {
        return (
            <SafeAreaView style={{flex:1}}>
                <CircleButton {...this.props} />
                <WebView
                    source={{uri:this.props.navigation.getParam('url')}}
                    style={{flex:1}}
                />
            </SafeAreaView>
        )
    }
}
