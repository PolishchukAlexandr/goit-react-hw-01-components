import PropType from 'prop-types';
import css from './FriendList.module.css';

import { FreindsListItem } from 'components/FriendList/FriendListItem/FriendListItem';

export const Friends = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <FreindsListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

Friends.propType = {
  friend: PropType.array.isRequired,
};