import styled from 'styled-components';

export const FriendListContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  
`;

export const FriendListItemContainer = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const FriendListItemStatus = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${(props) => (props.isOnline ? 'green' : 'red')};
`;

export const FriendListItemAvatar = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 10px;
  border-radius: 50%;
`;

export const FriendListItemName = styled.p`
  font-weight: bold;
  margin: 0;
`;