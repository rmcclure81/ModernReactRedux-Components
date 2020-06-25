import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import Faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className='ui container comments'>
      <br />
      <br />
      <ApprovalCard>
        <CommentDetail
          author={Faker.internet.userName()}
          time={Faker.date.weekday()}
          text={Faker.hacker.phrase()}
          avatar={Faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={Faker.internet.userName()}
          time={Faker.date.weekday()}
          text={Faker.hacker.phrase()}
          avatar={Faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={Faker.internet.userName()}
          time={Faker.date.weekday()}
          text={Faker.hacker.phrase()}
          avatar={Faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
