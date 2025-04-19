// "use server"

export function FetchUserProfile() {
    const user = 
        {
            username: "QuentinLeS",
            xp: 83,
            level: 4,
            won_game: 32,
            lost_game: 21,
            won_team_game: 10,
            lost_team_game: 4,
        };

    return user;
}

export function FetchFriendWithUserId() {
    const userList = [
        {
            id: 4,
            username: "Hugo"
        },
        {
            id: 5,
            username: "Martin"
        },
        {
            id: 6,
            username: "Robin"
        },
        {
            id: 7,
            username: "Nico"
        },
        {
            id: 8,
            username: "Pierre"
        }
    ];

    return userList;
}
