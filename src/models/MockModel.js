import { Record } from 'immutable';

const Author = Record({
  name: 'Paul',
  age: 33
})

const Post = Record({
  id: 0,
  title: 'Old Title',
  author: new Author()
})


export default Post;
