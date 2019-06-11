# BattlestarAlpha
WebGl shooter

### Technolgies used:
* Coppercube Core Game & 3D WebGl
* NodeJS backend
* MongoDB

### Api
Routes:

Standard routes:
```
GET /scores  - Grab all scores
GET /scores/{_id} - Grab that Score Data
GET /scores/top - Grab Top 3 players
```
Requires SecretKey:
```
GET /scores/create?name={userName}&score={score} - Post a new score
GET /scores/{_id}/update?name={userName}&score={score} - Update score
GET /scores/{_id}/delete - Remove score
```
##### NOTE: All routes are GET request due to a Coppercube limitation only allowing get requests.
As per Coppercube documentation:
```
ccbDoHTTPRequest() makes a GET network request via HTTP to any web server, and ccbCancelHTTPRequest 
can cancel this request while it is running. This allows to communicate with any web/database/multiplayer 
server with ease.
```
