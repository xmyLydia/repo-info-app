# repo-info-app
### Github information app that provides profile and repository information
#### Visit App from https://git-information-app.herokuapp.com/
1. User is able to search github user's profile by inputing user name
2. User is able to load github user's repository by click 'load more' button.
3. Users need to authenticate themselves by google account.
##Development
1. Clone project
2. Run `yarn install` in git bash
3. Run `yarn run dev-server` in git bash
##Conclusion
1. React
2. Redux
3. Firebase oAuth by using oAuthProvider (https://firebase.google.com/docs/reference/js/firebase.auth.OAuthProvider?authuser=0)
##What can be improved
1. Needs to upgrade to use Hooks.
2. Currently it just supports oAuth on google, try using oAuth on github.
3. Try to learn & write test scripts on project. 
4. Style the project.
##Note
#### suggest use chrome plugin `Allow CORS: Access-Control-Allow-Origin` and turn it on when visiting the page.
it allows people perform cross-domain Ajax requests in web applications. Investigating a better way to Avoid using this tool.