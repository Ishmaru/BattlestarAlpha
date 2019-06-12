# BattlestarAlpha
My First attempt at a full 3D WebGl game, "Battlestar Alpha" is a simple Arcade shooter, defeat as many enemies as you can, to beat your score. You have 3 different weapon types and a shield to protect you. Your goal is to down as many enemies as possible before you go down yourself.

### Controls
* WASD  & Arrow Keys move ship
* mouse aim
* left click to shoot
* space activates shield
* 1,2,3 keys switched between Laser, Phalnx, and Javelin weapons

### Technolgies used:
* Coppercube Core Game & 3D WebGl
* NodeJS backend
* MongoDB

![alt text](http://adriandelpha.com/art/battlestar2.jpg "Battlestar Alpha")

### Play game:
[PLAY NOW!](https://battle-star-alpha.herokuapp.com/)

### Api & Routes:

##### NOTE: All routes are GET requests due to a Coppercube limitation only allowing get requests.
As per Coppercube documentation:
```
ccbDoHTTPRequest() makes a GET network request via HTTP to any web server, and ccbCancelHTTPRequest 
can cancel this request while it is running. This allows to communicate with any web/database/multiplayer 
server with ease.
```

View routes:
```
GET / - PlayGame
GET /highscores - htmlview of sorted highscores
```
Standard Api routes:
```
GET /scores  - Grab all scores
GET /scores/{_id} - Grab that Score Data
GET /scores/top - Grab Top 3 players
```
Requires Api SecretKey:
```
GET /scores/create?name={userName}&score={score} - Post a new score
GET /scores/{_id}/update?name={userName}&score={score} - Update score
GET /scores/{_id}/delete - Remove score
```

