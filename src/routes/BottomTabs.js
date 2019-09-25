import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { HomeTabStacks } from './HomeTabStacks';
import { TimelineTabStacks } from './TimelineTabStacks';
import { SettingsTabStacks } from './SettingsTabStacks';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import { AppColors } from '../utils/constants';
import TempStore from '../utils/TempStorage';

export const BottomTabs = createMaterialBottomTabNavigator({
    Headlines:{
        screen:TimelineTabStacks,
        navigationOptions:{
            title:'Headlines',
            tabBarIcon:({tintColor})=><MaterialIcons name={'timeline'} size={25} color={tintColor} />
        }
    },
    Home:{
        screen:HomeTabStacks,
        navigationOptions:{
            title:'News',
            tabBarIcon:({tintColor})=><MaterialCommunityIcons name={'newspaper'} size={25} color={tintColor} />
        }
    },
    Settings:{
        screen:SettingsTabStacks,
        navigationOptions:{
            title:'Settings',
            tabBarIcon:({tintColor})=><Octicons name={'gear'} size={25} color={tintColor} />
        }
    }
},{
    barStyle:{
        backgroundColor:'rgba(249,249,249,0.8)',
        position:'absolute'
    },
    activeTintColor:AppColors.primary,
    inactiveTintColor:AppColors.secondary,
    backBehavior:'none'
})