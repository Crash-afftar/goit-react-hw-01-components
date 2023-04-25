import styled from 'styled-components';

export const ProfileWrap = styled.div`
  max-width: 40%;
  margin-top: 3.125rem;
  margin-bottom: 3.125rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 0.5rem;
`;

export const Description = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background-color: #fff;
  `;

export const Avatar = styled.img`
 display: flex;
  max-width: 30%;
  border-radius: 50%;
  border: 1px solid #e7ecf2;
`;

export const Name = styled.span`
  margin-bottom: 8px;
  font-weight: bold;
  font-size: 40px;
`;

export const Tag = styled.p`
  margin: 8px;
  font-size: 24px;
  color: #8a8b8e;
`;

export const Location = styled.p`
  margin: 8px;
  font-size: 24px;
  color: #8a8b8e;
`;

export const StatsList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  font-size: 24px;
  text-align: center;
  border-top: 1px solid #d3d5e3;
  background-color: rgba(241, 241, 241, 0.833);
  &:not(:last-child) {
  border-right: 1px solid rgb(227, 227, 227);
}
`;

export const Label = styled.span`
  padding-bottom: 8px;
  color: #8a8b8e;
`;

export const Quantity = styled.span`
  font-weight: bold;
`;
