# This is all routes for **Hamilton10Kicker**

| METHOD | ROUTE      | BODY EXEMPLE                                                                 | DESCRIPTION                                                                 |
|--------|------------|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| POST   | `/user`    | `{ "username": "Michel", "password": "f^&idhis$", "email": "Mich@mail.net", "country": "Irlande" }` | Create a new account                                                        |
| GET    | `/user`    | `{ "id": 3 }`                                                              | Return all information about this `user`                                    |
| PATCH  | `/user`    | `{ "username": "Michel", "password": "f^&idhis$", "email": "Mich@mail.net", "country": "Irlande", "level": 3, "xp": 453, "won_game": 32, "lost_game": 43, "won_team_game": 33, "lost_team_game": 32 }` | Modify all `element`. **Suggestion:** If possible, just modify one `element` |
| DELETE | `/user`    | `{ "id": 3 }`                                                              | Delete a user with `id`                                                    |
| GET    | `/userId`  | `{ "username": "Michel" }`                                                 | Get id with `username`                                                     |
| GET    | `/username`| `{ "id": 3 }`                                                              | Get the username with `id`                                                 |
| GET    | `/game/solo` | `{ "day": 7 }`                                                            | Get all parts up to 7 days                                                  |
| POST   | `/game/solo` | `{ "player_id1": 2, "player_id2": 3, "winner_id": 2, "looser_id": 3, "player_1_score": 11, "player_2_score": 9 }` | Create a new game                                                           |
| PATCH  | `/game/solo` | `{ "player_id1": 2, "player_id2": 3, "winner_id": 2, "looser_id": 3, "player_1_score": 11, "player_2_score": 9 }` | Modify a game                                                               |
| DELETE | `/game/solo` | `{ "id": 4 }`                                                              | Delete a game                                                              |
| GET    | `/team`    | `{ "id": 4 }`                                                              | Get a team with `id`                                                        |
| POST   | `/team`    | `{ "team_name": "Goateam", "player_id1": 2, "player_id2": 3 }`             | Create a new team                                                          |
| PATCH  | `/team`    | `{ "team_name": "Goateam", "player_id1": 2, "player_id2": 3, "won_game": 34, "lost_game": 22 }` | Modify all `element`. **Suggestion:** If possible, just modify one `element` |
| DELETE | `/team`    | `{ "id": 2 }`                                                              | Delete a team                                                              |
| GET    | `/game/team` | `{ "id": 3 }`                                                             | Get team match with `id`                                                   |
| POST   | `/game/team` | `{ "team_id1": 3, "team_id2": 2, "winner_id": 3, "looser_id": 2, "team_1_score": 11, "team_2_score": 10 }` | Create a new team game                                                      |
| PATCH  | `/game/team` | `{ "team_id1": 3, "team_id2": 2, "winner_id": 3, "looser_id": 2, "team_1_score": 11, "team_2_score": 10 }` | Modify all `element`. **Suggestion:** If possible, just modify one `element` |
| DELETE | `/game/team` | `{ "id": 2 }`                                                              | Delete a game with `id`                                                    |
