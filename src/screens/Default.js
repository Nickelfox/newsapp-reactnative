import React, { Component } from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import StorageModel from '../utils/StorageModel';
import { STORAGE_KEYS, AppColors } from '../utils/constants';
import {connect} from 'react-redux'
import { setHeadlines, setSources } from '../redux/actions/actions';

const FONT = 'Oxygen-Bold'

class Default extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount(){
        StorageModel.getStore(STORAGE_KEYS.HEADLINES).then((v)=>{
            if(v){
                const headlines = JSON.parse(v)
                this.props.setHeadlines(headlines)
            }
            StorageModel.getStore(STORAGE_KEYS.SOURCES).then((s)=>{
                if(s){
                    const sources = JSON.parse(s)
                    this.props.setSources(sources)
                }
            })
            StorageModel.setuser()
            this.props.navigation.navigate('BottomTabs')
        })
    }

    render() {
        return (
            <SafeAreaView style={{flex:1}}>
                <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:200,color:AppColors.ternary,fontFamily:FONT}}>N</Text>
                    <Text style={{marginTop:-50,fontSize:26}}>RN NEWS</Text>
                </View>
            </SafeAreaView>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setHeadlines: (params) => dispatch(setHeadlines(params)),
        setSources: (params) =>dispatch(setSources(params))
    }
  }

function mapStateToProps(state) {
    return {
      app: state.app
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Default)