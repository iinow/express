# express

oauth2-server 
https://oauth2-server.readthedocs.io/en/latest/api/oauth2-server.html#token-request-response-options-callback

- AuthorizationCode
(1) AuthorizationCode 얻는 방법
1. getClient - DirectUris 를 반환함
2. saveAuthorizationCode - authorizationCode, redirectUri 반환

(2) AccessToken 발급
1. getClient - DirectUris, grant 반환
2. getAuthorizationCode
3. revokeAuthorizationCode - AuthorizationCode 삭제
4. saveToken