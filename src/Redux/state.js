let store = {
    _state: {
        profilePage: {
            posts: [
                { postTxt: 'Здарова епта', likesCount: ' 0' },
                { postTxt: 'Я фронтом скоро стану', likesCount: ' 5' },
                { postTxt: 'Иди своей дорогой сталкер', likesCount: ' 10' }
            ],

            newPostText: 'zh31n'
        },

        messangerPage: {
            users: [
                { UserName: 'Leha', id: 1 },
                { UserName: 'Sanya', id: 2 },
                { UserName: 'Nebrik', id: 3 },
                { UserName: 'Dima', id: 4 },
                { UserName: 'Maksim', id: 5 },
                { UserName: 'Artur', id: 6 },
                { UserName: 'Leha', id: 7 },
                { UserName: 'Sanya', id: 8 },
                { UserName: 'Nebrik', id: 9 },
                { UserName: 'Dima', id: 10 },
                { UserName: 'Maksim', id: 11 },
                { UserName: 'Artur', id: 12 },
                { UserName: 'Leha', id: 13 },
                { UserName: 'Sanya', id: 14 },
                { UserName: 'Nebrik', id: 15 },
                { UserName: 'Dima', id: 16 },
                { UserName: 'Maksim', id: 17 },
                { UserName: 'Artur', id: 18 },
                { UserName: 'Leha', id: 19 },
                { UserName: 'Sanya', id: 20 },
                { UserName: 'Nebrik', id: 21 },
                { UserName: 'Dima', id: 22 },
                { UserName: 'Maksim', id: 23 },
                { UserName: 'Artur', id: 24 },
                { UserName: 'Leha', id: 25 },
                { UserName: 'Sanya', id: 26 },
                { UserName: 'Nebrik', id: 27 },
                { UserName: 'Dima', id: 28 },
                { UserName: 'Maksim', id: 29 },
                { UserName: 'Artur', id: 30 }
            ],
            messages: [
                { message: 'hey', id: 1 },
                { message: 'На цирлах', id: 2 },
                { message: 'Иди своей дорогой сталкер', id: 3 }
            ]
        },

        sideBar: {
            friends: [
                { FriendName: 'Artur', id: 1 },
                { FriendName: 'Leha', id: 2 },
                { FriendName: 'Sanya', id: 3 },
                { FriendName: 'Nebr', id: 4 }
            ]
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('changed')
    },
    addPost() {

        let newPost = {
            // id: 5,
            postTxt: this._state.profilePage.newPostText,
            likesCount: '0'
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {

        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

// import { renderEntire } from "../render";







export default store;
// window.store = store;