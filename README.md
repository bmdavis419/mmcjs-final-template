# Steps for final project

0. Fill in your needed enviornment variables in .env (for DATABASE_URL) and .env.local (for auth0) you will need to create these files in the root directory
1. Setup state for create post and create comment (CreateComment.js, CreatePost.js)
2. Make a useEffect hook that will read all of the posts from the api (index.js)
3. Display all of the posts to the screen by iterating over the posts array using a map function (index.js)
4. Make a post request from a function on the frontend that will save a new post to the api and then update the frontend state (CreatePost.js)
5. Make the get request for posts (get_posts.js)
6. Make the post request to add comments (post_comments.js)
