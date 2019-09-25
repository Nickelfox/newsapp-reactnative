import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { API_URL, API_HEADER, API_ENDPOINTS, HTTP_METHODS } from '../utils/constants';

class Network{
    _prepareURL(newstype,filters={}){
        let params = ''
        for(let f in filters){
            params += `&${f}=${filters[f]}`
        }
        return `${API_URL}${newstype}?${params}`
    }
    
    async getHeadlines(page=1,filter={}){
        try{
            let config = Object.assign({pageSize:20,page},filter)
            let h = await fetch(
                this._prepareURL(API_ENDPOINTS.HEADLINES,config),
                {
                    method:HTTP_METHODS.GET,
                    headers:API_HEADER
                }
            )
            return await h.json()
        }catch(err){
            console.log(err)
        }
    }

    async getSources(){
        try{
            let filters = {language:'en'}
            let h = await fetch(
                this._prepareURL(API_ENDPOINTS.SOURCES,filters),
                {
                    method:HTTP_METHODS.GET,
                    headers:API_HEADER
                }
            )
            return await h.json()
        }catch(err){
            console.log(err)
        }
    }

}

export default new Network()