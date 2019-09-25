/**
 * @ Author: Ravi K maurya
 * @ Create Time: 2019-06-14 12:03:49
 * @ Modified by: Ravi K Maurya
 * @ Modified time: 2019-06-15 12:03:49
 * @ Description: *****PLEASE DO NOT REMOVE THIS LINE*****
 */

import React, { Component } from 'react'
import {  View, SafeAreaView, StyleSheet } from 'react-native'
import { AppColors } from '../../../utils/constants';
import { Button, TextInput } from 'react-native-paper';
import StorageModel from '../../../utils/StorageModel';

export default class EditProfile extends Component {
    static navigationOptions = ({navigation})=>({
        headerRight:<Button
                        mode={'text'}
                        onPress={navigation.state.params.action}
                        style={{marginEnd:5}}
                        color={AppColors.primary}
                    >
                        Save
                    </Button>
    })
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.navigation.setParams({
            action:this._saveData.bind(this)
        })
        console.log(StorageModel.user)
        StorageModel.getReduxStore()
    }

    _saveData=()=>{
        alert('Save')
    }

    render() {
        return (
            <SafeAreaView style={{flex:1}}>
                <View style={{paddingVertical:15,paddingHorizontal:10}}>
                    <TextInput
                        mode={'outlined'}
                        placeholder={'Full Name'}
                        style={style.inputStyle}
                    />
                    <TextInput
                        mode={'outlined'}
                        placeholder={'Email'}
                        style={style.inputStyle}
                    />
                    <TextInput
                        mode={'outlined'}
                        placeholder={'Phone'}
                        style={style.inputStyle}
                    />
                    
                    <Button
                        mode={'contained'}
                        style={style.buttonStyle}
                        onPress={()=>alert('saved')}
                    >
                        Update
                    </Button>
                </View>
            </SafeAreaView>
        )
    }
}

const style = StyleSheet.create({
    inputStyle:{
        marginBottom:5
    },
    buttonStyle:{
        marginVertical:10,
        paddingVertical:5,
        fontSize:10
    }
})