import React, { Component } from 'react'
import { Text, View, TouchableHighlight, Platform } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { AppColors } from '../utils/constants';

const ICON = Platform.OS == 'ios' ? 'chevron-left':'arrow-left'
const TOP_MARGIN = Platform.select({
    ios:45,
    android:0
})
export default class CircleButton extends Component {
    render() {
        return (
            <TouchableHighlight 
                onPress={()=>this.props.navigation.goBack(null)}
                underlayColor={'#fff'}
                style={{position:'absolute',top:TOP_MARGIN,left:5,height:42,width:42,borderRadius:22,zIndex:999,backgroundColor:'#eee',justifyContent:'center',alignItems:'center'}}
            >
                <MaterialCommunityIcons name={ICON} size={25} color={AppColors.primary} />
            </TouchableHighlight>
        )
    }
}
