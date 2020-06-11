
const atualizaUsuario = (store = { user: {} }, action) => {
    switch (action.type) {
        case "UPDATE_USER":
            return { ...store, user: action.user };
        case "UPDATE_RANKING":
            return { ...store, ranking: action.ranking};
        default:
            return store;

    }
};
export default atualizaUsuario;
