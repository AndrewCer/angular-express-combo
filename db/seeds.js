var db = require('monk')('localhost/posts-workshop');
var Post = db.get('posts')

Post.remove({})
.then(function() {

  return Promise.all([
    Post.insert({
      title: "My Big Adventure",
      author: "Jeff Dean",
      image: "http://www.planwallpaper.com/static/images/image5_170127819.jpg",
      description: "Ode to Magritte",
      create_at: new Date
    }),

    Post.insert({
      title: "My Other Big Adventure",
      author: "Jeff Dean",
      image: "http://www.planwallpaper.com/static/images/tree-247122.jpg",
      description: "Church",
      create_at: new Date
    }),

    Post.insert({
      title: "My Third Big Adventure",
      author: "Jeff Dean",
      image: "http://www.planwallpaper.com/static/images/nasas-images-of-most-remarkable-events-you-cant-miss.jpg",
      description: "The meaning of life",
      create_at: new Date
    }),
  ])

})
.then(function(){
  db.close();
})
