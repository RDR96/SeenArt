import API from 'src/api/index';

class PostsService {
  async getPosts() {
    const posts = await API.posts.getPosts() ;

    return posts.data.map(item => ({
      image: item.featured_media,
      name: item.title.rendered,
      //description: item.content.rendered
    }));

    //return posts;
  }
}

export default PostsService;