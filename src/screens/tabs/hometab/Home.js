import React, { Component } from 'react'
import { Text, View, SafeAreaView, FlatList, TouchableOpacity, StatusBar,Animated, Image } from 'react-native'
import { AppColors, sourceIconPath, STORAGE_KEYS } from '../../../utils/constants';
import {connect} from 'react-redux'
import { titleAnimation } from '../../../utils/animations';
import Network from '../../../server/Network';
import StorageModel from '../../../utils/StorageModel';

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            sources:this.props.sources || [],
            loading:false,
            yAxis:new Animated.Value(0)
        }
    }

    componentDidMount(){
        this._getSources()
    }

    _getSources=()=>{
        this.setState({loading:true},()=>{
            Network.getSources().then((res)=>{
                if(res.status == 'ok'){
                    this.setState({
                        sources:res.sources,
                        loading:false
                    },()=>StorageModel.setStore(STORAGE_KEYS.SOURCES,res.sources))
                }
            }).catch(c=>console.log(c))
        })
    }

    render() {
        return (
            <SafeAreaView style={{flex:1}}>
                <StatusBar
                    barStyle={'default'}
                />
                <View style={{padding:10,flex:1,paddingBottom:0}}>
                    <View style={{paddingBottom:10}}>
                        <Animated.Text style={{fontSize:titleAnimation(this.state.yAxis),color:AppColors.secondary,fontFamily:'Oxygen-Bold'}}> Sources </Animated.Text>
                    </View>
                    <FlatList
                        data={this.state.sources}
                        renderItem={({item,index})=>{
                            let isEven = index%2==0;
                                return(
                                    <TouchableOpacity
                                        key={index.toString()+'source'}
                                        style={{flexDirection:isEven?'row':'row-reverse',marginVertical:5,borderWidth:0.6,borderRadius:5,padding:5}}
                                        onPress={()=>this.props.navigation.navigate('sourcenews',{data:item})}
                                    >
                                        <Image
                                            source={{uri:sourceIconPath(item.url),cache:'force-cache'}}
                                            style={{height:100,width:100}}
                                        />
                                        <View style={{flex:1,paddingStart:isEven?10:5}}>
                                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                                <Text style={{fontSize:17,fontWeight:'500',color:'#444',fontFamily:'Oxygen-Bold'}}>
                                                    {item.name}
                                                </Text>
                                                <Text style={{fontSize:11,color:AppColors.primary,paddingEnd:5}}>{item.category.toUpperCase()}</Text>
                                            </View>
                                            <Text numberOfLines={4}>{item.description}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                        }}
                        keyExtractor={(item,index)=>index.toString()}
                        showsVerticalScrollIndicator={false}
                        onScroll={Animated.event(
                            [{nativeEvent:{contentOffset:{y:this.state.yAxis}}}]
                        )}
                    />
                </View>
            </SafeAreaView>
        )
    }
}

function mapStateToProps(state){
    return{
        sources:state.app.sources
    }
}

export default connect(mapStateToProps)(Home)