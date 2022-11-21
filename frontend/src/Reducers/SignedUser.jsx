export const SignedUser = (state={},action) => {
    switch(action.type){
        case "loggeduser":
            return action.user;
        default:
            return state;
    }
}