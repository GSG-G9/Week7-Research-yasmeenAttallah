#   Stateless vs stateful authentication



## -   What is session based authentication (stateful) vs token based authentication (stateless)?


### token based authentication :

-   is self-contained and contains all the information it needs for authentication
    
-   token is a string server generate for the client side (browser)
    
-   JWT (JSON Web Token ) is token format to make secure endpoint
    
-   JWT consists of three parts: _Header_, _Payload_  and _Signature_.
    
-   signed to protect against manipulation, they are not encrypted. What this means is that a token can be easily decoded and its contents revealedbut without the correct secret, the token is useless


### session based authentication

-   the user enters its credentials and a new session is created for his access.

-   information such as user properties and match them against its identity provider (IdP)
    
-   the session id stored on a cookie on the user’s browser.

**-Draw flow diagrams to show the steps involved in each process**
#####   stateful
![stateful]('images/stateful.png')
#####   stateless
![stateless]('images/stateless.png')

**What are the advantages and disadvantages of each?**
#####   stateful
|advantage| disadvantage |
|--|--|
| Revoke the session anytime| Requires memory to be allocated to store the data.  |
| easy to implement | Difficult for 3rd party applications to use your credentials* |
#####   stateless
|advantage| disadvantage |
|--|--|
| Reduces memory usage| Cannot manage client from the server|
| Reduce session expiration problems| The size of a JWT token will be more than that of a normal Session token|



