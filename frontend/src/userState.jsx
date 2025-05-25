

let userState = false;

export const getState = () => {
    return userState;
}

export const setState = (newSate) => {
    userState = newSate;
}