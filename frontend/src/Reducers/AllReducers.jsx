import { combineReducers } from "redux";
import { SignCheck } from "./SignCheck";
import { SignedUser } from "./SignedUser";

export const Allreducers = combineReducers({
    SignedUser,
    SignCheck
})