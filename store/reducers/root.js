import {combineReducers} from 'redux'
import locations from './locations'
import characters from './characters'
import episodes from './episodes'

const root = combineReducers({
    locations: locations,
    episodes: episodes,
    characters: characters
})

export default root