import styled from 'styled-components';
import Result from '../../models/result';
import ResultItem from './item';

const Container = styled.div`
  background-color: #EBEFEF;
  padding: 20px;
  
  & > table{
    width: 80%;
    background-color: #ffffff;
    border-radius: 5px;
  }

  & > .title{
    font-size: 25px;
    font-weight: 500;
    text-align: center;
  }

  & > table{
    width: 100%;
  }

`

interface props{
  results: Array<Result>
}

const Results = ({results}:props) => <Container>
  <p className='title'> Live Results </p>
  <table>
    <body>
      {
        results.map((result, index) => <ResultItem position={index + 1} result={result} key={`result-${result.entity.id}`} />)
      }
    </body>
  </table>
  
</Container>

export default Results;