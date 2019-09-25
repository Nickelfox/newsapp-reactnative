import React, { Component } from 'react'
import { Text, View, TouchableHighlight, Image, Dimensions } from 'react-native'
import * as Animatable from 'react-native-animatable';

const {width} = Dimensions.get('window')

export default class NewsCards extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <TouchableHighlight
                onPress={()=>this.props.navigation.navigate('detail',{url:this.props.url})}
                underlayColor={'rgba(255,255,255,0.7)'}
                style={{marginVertical:5,borderRadius:5,borderWidth:1,borderColor:'#bbb'}}>
                <Animatable.View animation={'fadeIn'}>
                    <Image
                        source={{uri:this.props.urlToImage}}
                        style={{width:width-20,height:160,borderTopLeftRadius:5,borderTopRightRadius:5}}
                    />
                    <View style={{padding:10}}>
                        <Text numberOfLines={2} style={{fontSize:17,color:'#000',fontFamily:'Oxygen-Bold'}}>{this.props.title}</Text>
                        <Text numberOfLines={3} style={{fontFamily:'Oxygen-Regular'}}>{this.props.description}</Text>
                    </View>
                </Animatable.View>
            </TouchableHighlight>
        )
    }
}
