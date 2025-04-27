
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

export type Match = {
    id: number;
    player1?: string;
    player2?: string;
    team1?: string;
    team2?: string; 
    score1: number;
    score2: number;
    winner: string;
    created_at: string;
};
