  import user from './profile/user.json'
  import { Profile } from './profile/Profile';
  import data from './statistics/data.json'
  import { Statistics } from './statistics/Statistics';
  import friends from './friendlist/friends.json';
import { FriendList } from './friendlist/FriendList';
import transactions from './transactions/transactions.json';
import { TransactionHistory } from './transactions/TransactionHistory';

  export const App = () => {
    return (
      <div
        style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        }}
      >
        <Profile
          userName={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          userFollowers={user.stats.followers}
          userViews={user.stats.views}
          UserLikes={user.stats.likes}
        />
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
        </div>
    );
  };
