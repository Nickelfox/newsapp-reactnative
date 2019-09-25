import React, { Component } from 'react'
import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import Settings from '../screens/tabs/settingstabs/Settings';
import EditProfile from '../screens/tabs/settingstabs/EditProfile';
import ChangePassword from '../screens/tabs/settingstabs/ChangePassword';
import { AppColors } from '../utils/constants';
import { fromRight} from 'react-navigation-transitions'

const handleCustomTransition = ({ scenes }) => {
    return Platform.OS == 'ios'?'': fromRight();
  }
  
export const SettingsTabStacks = createStackNavigator({
    settings:{
        screen:Settings,
        navigationOptions:{
            header:null
        }
    },
    editprofile:{
        screen:EditProfile,
        navigationOptions:{
            title:'Edit Profile'
        }
    },
    changePass:{
        screen:ChangePassword,
        navigationOptions:{
            title:'Change Password'
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
    },
    defaultNavigationOptions:{
        headerBackTitleStyle:{
            color:AppColors.primary
        },
        headerTintColor:AppColors.primary
    },
    transitionConfig:(nav)=>handleCustomTransition(nav)
})