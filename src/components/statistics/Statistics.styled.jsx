import styled from 'styled-components';

export const StatisticsContainer = styled.div`
    max-width: 50%;
  margin-top: 3.125rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-bottom: 3.125rem;
`;

export const Title = styled.section`
  margin: 0;
  padding: 32px;
  text-transform: uppercase;
  text-align: center;
  color: #000;
  font-weight: bold;
  font-size: 40px;
  border-radius: 10px;
  border-bottom: 1px solid #d3d5e3;
  background-color: #fff;
`;

export const StatList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 0;
  padding: 0;
  list-style: none;
  border-radius: 10px;
`;

export const StatItem = styled.li`
display: flex;
  flex-direction: column;
  text-align: center;
  text-shadow: 0 0 3px #000;
  border-radius: 10px;
  `;

export const Label = styled.span`
  padding-top: 1.3rem;
  font-size: 1rem;
  color: #fff;
`;

export const PercentAge = styled.span`
  padding: 1.3rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
`;