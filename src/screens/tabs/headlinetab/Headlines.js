import React, { Component } from 'react'
import { Text, View, SafeAreaView, FlatList, ActivityIndicator, StatusBar,Animated, RefreshControl } from 'react-native'
import {connect} from 'react-redux'
import { AppColors, STORAGE_KEYS } from '../../../utils/constants';
import { titleAnimation } from '../../../utils/animations';
import Network from '../../../server/Network';
import NewsCards from '../../../components/NewsCards';
import StorageModel from '../../../utils/StorageModel';

class Headlines extends Component {
    constructor(props){
        super(props)
        this.state = {
            headlines:this.props.headlines || [],
            loading:false,
            yAxis:new Animated.Value(0),
            refreshing:true,
            loadingMore:false
        }
        this.totalResults = 0
        this.page = 1
        this.pageSize = 20
        this.params = {country:'in',language:'hi'}
    }

    componentDidMount(){
        this._refreshHeadlines()
    }

    _refreshHeadlines=()=>{
        this.page = 1;
        this.setState({refreshing:true},()=>{
            Network.getHeadlines(this.page,this.params).then((res)=>{
                this.setState({refreshing:false,headlines:[]},()=>{
                    this._assignValues(res)
                })
            }).catch(c=>this.setState({refreshing:false}))
        })
    }

    _moreHeadlines=()=>{
        if(this.totalResults<(this.pageSize*(this.page-1))) return;
        this.setState({loadingMore:true},()=>{
            Network.getHeadlines(this.page,this.params).then((res)=>{
                this.setState({loadingMore:false},()=>{
                    this._assignValues(res)
                })
            }).catch(c=>this.setState({loadingMore:false}))
        })
    }

    _assignValues=(res)=>{
        if(res.status == 'ok'){
            let {headlines} = this.state
            headlines = [...headlines,...res.articles]
            this.setState({
                headlines,
                refreshing:false,
                loadingMore:false
            })
            this.page +=1
            this.totalResults = res.totalResults
            StorageModel.setStore(STORAGE_KEYS.HEADLINES,headlines)
        }
    }

    render() {
        return (
            <SafeAreaView style={{flex:1}}>
                <StatusBar
                    barStyle={'default'}
                />
                <View style={{padding:10,flex:1,paddingBottom:0}}>
                    <View style={{paddingBottom:10}}>
                        <Animated.Text style={{fontSize:titleAnimation(this.state.yAxis),color:AppColors.secondary,fontFamily:'Oxygen-Bold'}}> Trending</Animated.Text>
                    </View>
                    <FlatList
                        data={this.state.headlines}
                        renderItem={({item,index})=><NewsCards {...this.props} {...item} index={index} />}
                        keyExtractor={(item,index)=>index.toString()}
                        onScroll={Animated.event(
                            [{nativeEvent: {contentOffset: {y: this.state.yAxis}}}]
                        )}
                        scrollEventThrottle={15}
                        showsVerticalScrollIndicator={false}
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={this._refreshHeadlines}
                                colors={[AppColors.primary]}
                            />
                        }
                        onEndReached={this._moreHeadlines}
                    />
                    {
                        this.state.loadingMore && 
                        <ActivityIndicator
                            size={'large'}
                            animating
                            color={AppColors.primary}
                        />
                    }
                </View>
            </SafeAreaView>
        )
    }
}

function mapStateToProps(state){
    return{
        headlines:state.app.headlines
    }
}

export default connect(mapStateToProps)(Headlines)