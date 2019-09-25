import React, { Component } from 'react'
import AsyncStorage from '@react-native-community/async-storage' 
import configureStore from '../redux/stores/store';


class StorageModel {
    constructor(){
        this.storage = AsyncStorage
        this.user = {}
    }
    
    setStore(key,value){
        return this.storage.setItem(key,JSON.stringify(value))
    }

    getStore(key){
        return this.storage.getItem(key)
    }

    removeStore(key){
        return this.storage.removeItem(key)
    }

    getuser(){
        console.log(this.user)
        return this.user
    }

    setuser(){
        this.user = {name:'Test'}
    }

    getReduxStore(){
        console.log(configureStore().getState())
    }

}

export default new StorageModel()