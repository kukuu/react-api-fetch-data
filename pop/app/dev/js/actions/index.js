//This is the Action Creator. Passed on to the onclick user event in the user list container
//Action creators are functions that create objects (export ...), actions are the objects that get created (return {}).
export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);

    //Here is the Action in the return
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};
