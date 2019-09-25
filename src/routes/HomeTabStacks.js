import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from '../screens/tabs/hometab/Home';
import NewsBySource from '../screens/tabs/hometab/NewsBySource';
import NewsDetail from '../screens/tabs/headlinetab/NewsDetail';

export const HomeTabStacks = createStackNavigator({
    home:{
        screen:Home,
        navigationOptions:{
            header:null
        }
    },
    sourcenews:{
        screen:NewsBySource
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