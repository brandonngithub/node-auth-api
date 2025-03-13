# node-auth-api

https://www.youtube.com/watch?v=7nafaH9SddU&ab_channel=TraversyMedia

- each server has a secret key
- three parts of JWT token separated by two periods
- first part of token is header
- second part is actual info
- third part is first two parts encoded w secret key
- if token modified then first two parts encoded w secret key will not match third part
- JWT for authorization not authentication
- for sessions usually store session ids in server with user data, whether have permission, etc. session id is passed around.
- for JWT the user data stored inside token and server has secret key to encode/decode. token is passed around.
- JWT useful if two servers and stay logged in both or multiple instances w load balancer
