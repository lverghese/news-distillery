require('dotenv').config()

//======pusher trial =======================================//

// require('dotenv').config({ path: '.env' });
// import Pusher from 'pusher-js';
// import pushid from 'pushid';
// const NewsAPI = require('newsapi');

// const pusher = new Pusher({
//   appId: process.env.PUSHER_APP_ID,
//   key: process.env.PUSHER_APP_KEY,
//   secret: process.env.PUSHER_APP_SECRET,
//   cluster: process.env.PUSHER_APP_CLUSTER,
//   encrypted: true,
// });

// const newsapi = new NewsAPI(process.env.NEWS_API_KEY);

// export const updateFeed =(topic) => {
// let counter = 2;
// setInterval(() => {
//   fetchNews(topic, counter)
//     .then(response => {
//       pusher.trigger('news-channel', 'update-news', {
//         articles: response.articles,
//       });
//       counter += 1;
//     })
//     .catch(error => console.log(error));
// }, 3000);
// }

// //app.
// export const getFeed = () => {
// const topic = 'bitcoin';
// fetchNews(topic, 1)
//   .then(response => {
//     res.json(response.articles);
//     updateFeed(topic);
//   })
//   .catch(error => console.log(error));
// }

//======================================================//
export const getMe = (token) => {
    return fetch('/api/users/me', {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });
  };

  export const createUser = (userData) => {
    return fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  };
  
  export const loginUser = (userData) => {
    return fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData)
    });
  };
  
  //save article data to user obj
export const saveArticle = (articleData, token) => {
    return fetch('/api/users', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
         authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(articleData),
      //body: JSON.stringify(articleData.articleId)
     });
  };

  //remove saved article from user's dashboard
export const deleteArticle= (articleId, token) => {
    return fetch(`/api/users/articles/${articleId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  };

// make a search to news api
//ie:
// https://newsapi.org/v2/everything?q=bitcoin
const KEY = process.env.REACT_APP_API_KEY;

export const searchArticles= (query) => {
    return fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${KEY}`);
};


//===========================================================================//