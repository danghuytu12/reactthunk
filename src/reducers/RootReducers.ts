import { combineReducers } from "redux";
import pokemonReducer from "./PokemonReducers";

const RootReducer=combineReducers({
    pokemon:pokemonReducer
});
export default RootReducer;