let initialState = {
    friends: [
        { FriendName: 'Artur', id: 1 },
        { FriendName: 'Leha', id: 2 },
        { FriendName: 'Sanya', id: 3 },
        { FriendName: 'Nebr', id: 4 }
    ]
};

const SidebarReducer = (state = initialState, action) => {
    return state;
}

export default SidebarReducer;
