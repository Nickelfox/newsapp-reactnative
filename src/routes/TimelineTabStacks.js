import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import Headlines from '../screens/tabs/headlinetab/Headlines';
import NewsDetail from '../screens/tabs/headlinetab/NewsDetail';

export const TimelineTabStacks = createStackNavigator({
    timeline:{
        screen:Headlines,
        navigationOptions:{
            header:null
        }
    },
    detail:{
        screen:NewsDetail,
        navigationOptions:{
            header:null
        }
    }
},{
    navigationOptions:({navigation})=>{
        let tabBarVisible = true
        if (navigation.state.routes.length > 1) {
            tabBarVisible = false;
        }
        
        return {
            tabBarVisible
        };
    }
})