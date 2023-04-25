import PropTypes from 'prop-types';
import { ProfileWrap, Description, Avatar, Name, Tag, Location, StatsList, StatsItem, Label, Quantity } from "./Profile.styled";

export const Profile = ({ userName, tag, location, avatar, userFollowers, userViews, UserLikes }) => {
    return (
        <ProfileWrap>
            <Description>
                <Avatar
                    src={avatar}
                    alt={userName}
                />
                <Name>{userName}</Name>
                <Tag>@{tag}</Tag>
                <Location>{location}</Location>
            </Description>

            <StatsList class="stats">
                <StatsItem>
                    <Label>Followers</Label>
                    <Quantity>{userFollowers}</Quantity>
                </StatsItem>
                <StatsItem>
                    <Label>Views</Label>
                    <Quantity>{userViews}</Quantity>
                </StatsItem>
                <StatsItem>
                    <Label>Likes</Label>
                    <Quantity>{UserLikes}</Quantity>
                </StatsItem>
            </StatsList>
        </ProfileWrap>
    );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};