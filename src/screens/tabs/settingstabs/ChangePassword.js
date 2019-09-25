import React, { Component } from 'react'
import { View, SafeAreaView, StyleSheet } from 'react-native'
import { Button, TextInput } from 'react-native-paper';
import { AppColors } from '../../../utils/constants';

export default class ChangePassword extends Component {
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
                        placeholder={'Old Password'}
                        style={style.inputStyle}
                    />
                    <TextInput
                        mode={'outlined'}
                        placeholder={'New Password'}
                        style={style.inputStyle}
                    />
                    <TextInput
                        mode={'outlined'}
                        placeholder={'Confirm New Password'}
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