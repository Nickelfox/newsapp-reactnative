export const TITLE_MAX_SIZE = 38
export const TITLE_MIN_SIZE = 22
export const TITLE_SCROLL_DISTANCE = (TITLE_MAX_SIZE-TITLE_MIN_SIZE)*3

// API
export const API_URL = 'https://newsapi.org/v2/'
export const API_KEY = '1cf2619e36274fde9f7709c184f55863'
export const ICON_BASE_PATH = 'https://icon-locator.herokuapp.com/icon?size=70..120..200&url='
export const API_HEADER = {
                'Content-Type':'application/json',
                'Authorization':`Bearer ${API_KEY}`
}

// Colors
export const AppColors = {
            primary         :'rgb(32,111,234)',
            secondary       :'#888',
            ternary         :'#212121'
}

export const sourceIconPath = (uri) =>{
    return `${ICON_BASE_PATH}${uri}`
}

export const STORAGE_KEYS = {
                HEADLINES           :'HEADLINES',
                SOURCES             :'SOURCES',
                USERINFO            :'USER_INFO',
                CONFIGURATIONS      :'CONFIGURATION'
}

export const API_ENDPOINTS = {
                HEADLINES           :'top-headlines',
                SOURCES             :'sources',
                EVERYTHING          :'everything'
}

export const HTTP_METHODS = {
                POST        :'POST',
                GET         :'GET',
                PUT         :'PUT',
                DELETE      :'DELETE'
}