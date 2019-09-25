import React, { Component } from 'react'
import { Text, View, SafeAreaView, FlatList, ActivityIndicator, RefreshControl } from 'react-native'
import Network from '../../../server/Network';
import NewsCards from '../../../components/NewsCards';
import { AppColors } from '../../../utils/constants';

export default class NewsBySource extends Component {
    static navigationOptions = ({navigation})=>({
        title:navigation.getParam('data').name
    })
    constructor(props){
        super(props)
        this.state = {
            headlines:[],
            loading:false,
            refreshing:true,
            loadingMore:false,
            params:this.props.navigation.getParam('data')
        }
    }

    componentDidMount(){
        this._refreshHeadlines()
    }

    _refreshHeadlines=()=>{
        this.page = 1;
        this.setState({refreshing:true,headlines:[]},()=>{
            Network.getHeadlines(this.page,{sources:this.state.params.id}).then((res)=>{
                this.setState({refreshing:false},()=>{
                    this._assignValues(res)
                })
            }).catch(c=>this.setState({refreshing:false}))
        })
    }

    _moreHeadlines=()=>{
        if(this.totalResults<(this.pageSize*(this.page-1))) return;
        this.setState({loadingMore:true},()=>{
            Network.getHeadlines(this.page).then((res)=>{
                this.setState({loadingMore:false},()=>{
                    this._assignValues(res)
                })
            }).catch(c=>this.setState({loadingMore:false}))
        })
    }

    _assignValues=(res)=>{
        console.log(res)
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
        }
    }

    render() {
        return (
            <SafeAreaView style={{flex:1}}>
                <View style={{paddingHorizontal:10,flex:1}}>
                    <FlatList
                        data={this.state.headlines}
                        renderItem={({item,index})=><NewsCards {...this.props} {...item} index={index} />}
                        keyExtractor={(item,index)=>index.toString()}
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
