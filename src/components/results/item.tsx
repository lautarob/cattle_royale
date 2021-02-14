import styled from 'styled-components';
import Result from '../../models/result';

const Container = styled.tr`
  position: flex;
  justify-items: center;

  & > .position{
    font-size: 30px;
    font-weight: bold;
  }

  & > td{
    vertical-align: middle;
    padding: 15px;
    color: #221E20;
  }
`

interface props {
  result: Result;
  position: number;
}

const ResultItem = ({result, position}: props) => <Container>
  <td className="position"> {position} </td>
  <td> <img src={result.entity.previewURL} /> </td>
  <td> {result.matchups} matchups </td>
  <td> {result.winRate}% win rate </td>
  <td> {result.eloScore}% ELO Score </td>
</Container>

export default ResultItem;