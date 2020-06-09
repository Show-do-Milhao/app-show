
const atualizaUsuario = (store = { user: {} }, action) => {
    switch (action.type) {
        case "UPDATE_USER":
            return { ...store, user: action.user };
        default:
            return store;
    }
};
export default atualizaUsuario;
