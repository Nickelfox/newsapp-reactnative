import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createAppContainer,createSwitchNavigator } from 'react-navigation'
import { BottomTabs } from './BottomTabs';
import Default from '../screens/Default';

const AppSwither = createSwitchNavigator({
    Default, BottomTabs
})

export default createAppContainer(AppSwither)