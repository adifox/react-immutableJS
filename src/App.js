import React, { Component } from 'react';
import { List } from 'immutable';
import Post from './models/MockModel';
import './App.css';

class App extends Component {
  data = [
    { id: 11, title: 'first post' },
    { id: 22, title: 'second post' }
  ]

  state = {
    post0: new Post(),
    post1: new Post(),
    post2: new Post()
      .set('id', 234)
      .set('title', 'Post2 Title'),
    post3: new Post(
      {
        id: 123,
        title: 'Post3 Title'
      }
    ),
    post4: new Post()
      .merge({
        id: 456,
        title: 'The merged Title'
      }),
    post5: new Post({
      title: 'A new Book',
    }),
    post6: new Post()
      .update('author', author => (
        author.get('age') > 30 ? author.set('name', 'Peter') : author
      )),
    list: List()
      .push(new Post()
    ),
    clearList: List([1, 2, 3])
      .clear(),
    updatedList: this.data.map((item) => new Post(item)).filter(post => post.get('id') !== 11)
  }

  render() {
    console.log('the list:', this.state.list.toJS());

    this.state.post0.set('title', 'New Title');

    const
      title0  = this.state.post0.get('title'),
      title1  = this.state.post1.set('title', 'New Title').get('title'),
      post2   = this.state.post2,
      post3   = this.state.post3,
      post4   = this.state.post4,
      nested  = this.state.post5.getIn(['author','age']),
      nested2 = this.state.post5.setIn(['author','age'], 44).getIn(['author','age']),
      updated = this.state.post6.getIn(['author', 'name']),
      postId  = this.state.list.map((el) => el.id),
      postAuthorName = this.state.list.map((el) => el.getIn(['author','name'])),
      updatedList = this.state.updatedList.map((el) =>
        <div key={new Date()}>
          <ul>
            <li>{ el.id }</li>
            <li>{ el.title }</li>
          </ul>
        </div>
      );

    return (
      <div className="App">
        <p>Title: { title0 }</p>
        <hr/>
        <p>Title: { title1 }</p>
        <hr/>
        <p>Id: { post2.id }</p>
        <p>Title: { post2.title }</p>
        <hr/>
        <p>Id: { post3.id }</p>
        <p>Title: { post3.title }</p>
        <hr/>
        <p>Id: { post4.id }</p>
        <p>Title: { post4.title }</p>
        <hr/>
        <p>Authors age - nested - : { nested }</p>
        <p>Authors age - nested2 - : { nested2 }</p>
        <hr/>
        <p>The update method result: { updated }</p>
        <hr/>
        <p>Created a List:</p>
        <ol>
          <li>Id: { postId } </li>
          <li>Author Name: { postAuthorName } </li>
        </ol>
        <hr/>
        <p>Do you see something? no? Its because its empty: { this.state.clearList }</p>
        <hr/>
          { updatedList }
        <hr/>
      </div>
    );
  }
}

export default App;



