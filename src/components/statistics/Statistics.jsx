import PropTypes from 'prop-types';
import { StatisticsContainer,Title,StatList,StatItem,Label, PercentAge } from './Statistics.styled';

function getRandomHexColor() {
  let bgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return bgColor;
}

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsContainer>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map((stat) => {
          return (
            <StatItem
              key={stat.id}
              style={{
                backgroundColor: getRandomHexColor(),
              }}
            >
              <Label>{stat.label}</Label>
              <PercentAge>{stat.percentage}%</PercentAge>
            </StatItem>
          );
        })}
      </StatList>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};