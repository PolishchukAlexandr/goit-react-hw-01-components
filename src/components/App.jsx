import { UserProfile } from 'components/Profile/Profile';
import user from 'DATA/users.json';

// import { Statistic } from '';
// import data from '';

// import { Friends } from '';
// import friends from '';

// import { TransactionHistory } from '';
// import  transaction from '';


export const App = () => {
  return (
    <>
      <UserProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {/* <Statistic title="Statistic" stats={data} />
      <Friends friends={friends} />
      <TransactionHistoryUser items={transaction}/> */}
    </>
  );
};
