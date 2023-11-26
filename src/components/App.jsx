import { UserProfile } from 'components/Profile/Profile';
import user from 'Data/user.json';

import { UserStatistic } from 'components/Statistic/Statistic';
import data from 'JSON/data.json';

import { Friends } from './Friend-list/Friends';
import friends from 'JSON/friends.json';

import { TransactionHistoryUser } from 'components/Transaction/Transaction';
import  transaction from 'JSON/transactions.json';


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
  );
};
