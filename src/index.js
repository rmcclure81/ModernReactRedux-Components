import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import Faker from 'faker';

const App = () => {
  return (
    <div className='ui container comments'>
      <CommentDetail
        author={Faker.internet.userName()}
        time={Faker.date.weekday()}
        text={Faker.hacker.phrase()}
        avatar={Faker.image.avatar()}
      />
      <CommentDetail
        author={Faker.internet.userName()}
        time={Faker.date.weekday()}
        text={Faker.hacker.phrase()}
        avatar={Faker.image.avatar()}
      />
      <CommentDetail
        author={Faker.internet.userName()}
        time={Faker.date.weekday()}
        text={Faker.hacker.phrase()}
        avatar={Faker.image.avatar()}
      />
      <CommentDetail
        author={Faker.internet.userName()}
        time={Faker.date.weekday()}
        text={Faker.hacker.phrase()}
        avatar={Faker.image.avatar()}
      />
      <CommentDetail
        author={Faker.internet.userName()}
        time={Faker.date.weekday()}
        text={Faker.hacker.phrase()}
        avatar={Faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
