import { UserProfile } from 'components/Profile/Profile';
import user from 'JSON/user.json';

import { UserStatistic } from 'components/Statistics/Statistics';
import data from 'JSON/data.json';

import { Friends } from 'components/FriendList/FriendList';
import friends from 'JSON/friends.json';

import { TransactionHistoryUser } from 'components/TransactionHistory/TransactionHistory';
import  transaction from 'JSON/transactions.json';


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
      <UserStatistic title="Statistic" stats={data} />
      <Friends friends={friends} />
      <TransactionHistoryUser items={transaction}/>
    </>
  );
};
