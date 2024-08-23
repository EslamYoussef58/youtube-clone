export const API_KEY = 'AIzaSyDLZ3bnxtRb0N04RawIyJyC76WGE4jgD4g'

export const value_converter = (value) => {
    if(value >= 1000000)
        {
            return Math.floor(value/1000000)+"M"
        }else if(value => 1000) 
        {
            return Math.floor(value/1000)+"K" 
        }else {
            return value
        }
}