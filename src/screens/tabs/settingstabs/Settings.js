import React, { Component } from 'react'
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, StatusBar, Animated, Switch, Button } from 'react-native'
import Notif from 'react-native-push-notification'
import { AppColors } from '../../../utils/constants';
import { titleAnimation } from '../../../utils/animations';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import OxBText from '../../../components/OxBText';
import T from '../../../utils/ToastExample'

export default class Settings extends Component {
    constructor(props){
        super(props)
        this.state = {
            headlines:Array.from({length:20},()=>1+1),
            loading:false,
            yAxis:new Animated.Value(0),
            appNotification:true,
            emailNotification:false,
            darkTheme:false
        }
        console.log(this.props)
    }

    componentDidMount(){
        Notif.configure({
            onRegister:()=>{

            },
            permissions:{
                badge:true,
                alert:true,
                sound:true
            },
            onNotification:(notification)=>{
                console.log(notification)
            },
            popInitialNotification:true,
            requestPermissions:true,
        })
    }

    showNotification=()=>{
        Notif.localNotification({
            id:1,
            title:'AD-'+Math.floor(Math.random()*1000),
            message:Math.floor(Math.random()*1000000),
            priority:'high',

        })

        // T.show('Notified',T.SHORT)
    }

    _navigate=(page,options={})=>{
        this.props.navigation.navigate(page,options)
    }

    _toggleAppNotification=()=>this.setState({appNotification:!this.state.appNotification})
    _toggleEmailNotification=()=>this.setState({emailNotification:!this.state.emailNotification})
    _toggleTheme=()=>this.setState({darkTheme:!this.state.darkTheme})

    render() {
        return (
            <SafeAreaView style={{flex:1}}>
                <StatusBar
                    barStyle={'default'}
                />
                <View style={{padding:10,flex:1,paddingBottom:0}}>
                    <View style={{paddingBottom:10}}>
                        <Animated.Text style={{fontSize:titleAnimation(this.state.yAxis),color:AppColors.secondary,fontFamily:'Oxygen-Bold'}}> Settings </Animated.Text>
                    </View>
                    <ScrollView
                        onScroll={Animated.event(
                            [{nativeEvent: {contentOffset: {y: this.state.yAxis}}}]
                        )}
                        scrollEventThrottle={15}
                        showsVerticalScrollIndicator={false}
                    >
                        {/* Account Section */}
                        <View style={{flexDirection:'row',alignItems:'center',borderBottomWidth:0.5,borderBottomColor:AppColors.secondary,paddingBottom:5}}>
                            <MaterialCommunityIcons name={'account'} size={25} color={AppColors.primary} />
                            <Text style={{fontSize:18,fontWeight:'500',fontFamily:'Oxygen-Bold'}}> Account</Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={()=>this._navigate('editprofile')} style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingVertical:10}}>
                                <Text style={{fontSize:16}}>Edit Profile</Text>
                                <MaterialCommunityIcons name={'chevron-right'} size={20} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this._navigate('changePass')} style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingVertical:10}}>
                                <Text style={{fontSize:16}}>Change Password</Text>
                                <MaterialCommunityIcons name={'chevron-right'} size={20} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingVertical:10}}>
                                <Text style={{fontSize:16}}>Request Data</Text>
                                <MaterialCommunityIcons name={'chevron-right'} size={20} />
                            </TouchableOpacity>
                        </View>

                        {/* Theme */}
                        <View style={{flexDirection:'row',alignItems:'center',borderBottomWidth:0.5,borderBottomColor:AppColors.secondary,paddingBottom:5,marginTop:15}}>
                            <MaterialCommunityIcons name={'format-color-fill'} size={25} color={AppColors.primary} />
                            <Text style={{fontSize:18,fontWeight:'500',fontFamily:'Oxygen-Bold'}}> Theme</Text>
                        </View>
                        <View>
                            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingVertical:10}}>
                                <Text style={{fontSize:16}}>Dark Theme</Text>
                                <Switch 
                                    value={this.state.darkTheme} 
                                    trackColor={{true:AppColors.secondary,false:'#ddd'}} 
                                    thumbColor={AppColors.primary} 
                                    onValueChange={this._toggleTheme}
                                />
                            </View>
                        </View>

                        {/* Notification Section */}
                        <View style={{flexDirection:'row',alignItems:'center',borderBottomWidth:0.5,borderBottomColor:AppColors.secondary,paddingBottom:5,marginTop:15}}>
                            <MaterialCommunityIcons name={'bell'} size={25} color={AppColors.primary} />
                            <Text style={{fontSize:18,fontWeight:'500',fontFamily:'Oxygen-Bold'}}> Notifications</Text>
                        </View>
                        <View>
                            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingVertical:10}}>
                                <Text style={{fontSize:16}}>App Notification</Text>
                                <Switch 
                                    value={this.state.appNotification} 
                                    trackColor={{true:AppColors.secondary,false:'#ddd'}} 
                                    thumbColor={AppColors.primary} 
                                    onValueChange={this._toggleAppNotification}
                                />
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingVertical:10}}>
                                <Text style={{fontSize:16}}>Email Notifications</Text>
                                <Switch 
                                    value={this.state.emailNotification} 
                                    trackColor={{true:AppColors.secondary,false:'#ddd'}} 
                                    thumbColor={AppColors.primary} 
                                    onValueChange={this._toggleEmailNotification}
                                />
                            </View>
                        </View>

                        {/* More Section */}
                        <View style={{flexDirection:'row',alignItems:'center',borderBottomWidth:0.5,borderBottomColor:AppColors.secondary,paddingBottom:5,marginTop:15}}>
                            <MaterialCommunityIcons name={'shape-square-plus'} size={25} color={AppColors.primary} />
                            <Text style={{fontSize:18,fontWeight:'500',fontFamily:'Oxygen-Bold'}}> More</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingVertical:10}}>
                                <Text style={{fontSize:16}}>Language</Text>
                                <MaterialCommunityIcons name={'chevron-right'} size={20} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingVertical:10}}>
                                <Text style={{fontSize:16}}>Country</Text>
                                <MaterialCommunityIcons name={'chevron-right'} size={20} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingVertical:10}}>
                                <Text style={{fontSize:16}}>My Sources</Text>
                                <MaterialCommunityIcons name={'chevron-right'} size={20} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingVertical:10}}>
                                <Text style={{fontSize:16}}>My Categories</Text>
                                <MaterialCommunityIcons name={'chevron-right'} size={20} />
                            </TouchableOpacity>
                        </View>

                        {/* Support Section */}
                        <View style={{flexDirection:'row',alignItems:'center',borderBottomWidth:0.5,borderBottomColor:AppColors.secondary,paddingBottom:5,marginTop:15}}>
                            <FontAwesome name={'support'} size={22} color={AppColors.primary} />
                            <Text style={{fontSize:18,fontWeight:'500'}}> Support</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingVertical:10}}>
                                <Text style={{fontSize:16}}>Privacy Policy</Text>
                                <MaterialCommunityIcons name={'chevron-right'} size={20} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingVertical:10}}>
                                <Text style={{fontSize:16}}>Terms of use</Text>
                                <MaterialCommunityIcons name={'chevron-right'} size={20} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingVertical:10}}>
                                <Text style={{fontSize:16}}>Contact us</Text>
                                <MaterialCommunityIcons name={'chevron-right'} size={20} />
                            </TouchableOpacity>
                        </View>

                        <View style={{marginVertical:20}}>
                            <Button
                                onPress={()=>alert('logout?')}
                                color={AppColors.primary}
                                title={'Logout'}
                            />
                        </View>

                    </ScrollView>
                </View>
            </SafeAreaView>
        )
    }
}
