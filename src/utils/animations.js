import React, { Component } from 'react'
import { Animated } from 'react-native'
import { TITLE_SCROLL_DISTANCE, TITLE_MAX_SIZE, TITLE_MIN_SIZE } from './constants';

export const titleAnimation = (state = new Animated.Value(0)) =>{
    return state.interpolate({
        inputRange:[0,TITLE_SCROLL_DISTANCE],
        outputRange:[TITLE_MAX_SIZE,TITLE_MIN_SIZE],
        extrapolate:'clamp'
    })
}