
export type User = {
    username: string;
    xp: number;
    level: number;
    won_game: number;
    lost_game: number;
    won_team_game: number;
    lost_team_game: number;
}

export type FriendUserList = {
    id: number;
    username: string;
}