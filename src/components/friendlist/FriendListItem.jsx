import PropTypes from 'prop-types';
import { FriendListItemContainer,FriendListItemStatus,FriendListItemAvatar,FriendListItemName } from "./Friendlist.styled";

export const FriendListItem = ({ friend }) => {
  return (
    <FriendListItemContainer>
      <FriendListItemStatus isOnline={friend.isOnline} />
      <FriendListItemAvatar src={friend.avatar} alt={`${friend.name}'s avatar`} />
      <FriendListItemName>{friend.name}</FriendListItemName>
    </FriendListItemContainer>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};