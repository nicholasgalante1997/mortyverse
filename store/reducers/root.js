import {combineReducers} from 'redux'
import locations from './locations'
import characters from './characters'
import episodes from './episodes'
import user from './user'

const root = combineReducers({
    locations: locations,
    episodes: episodes,
    characters: characters,
    user: user
})

export default root