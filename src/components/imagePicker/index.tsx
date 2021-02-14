import { useState } from 'react';
import styled from 'styled-components';
import { Entity } from '../../models/entity';
import SelectableImage from './Image';

const Container = styled.section`
  background-color: #206BAC;
  text-align: center;
  color: #ffffff;
  padding: 20px;

  & > .title {
    font-size: 30px;
    margin-bottom: 0px;
    font-weight: 500;
  }

  & > .subtitle{
    font-size: 40px;
    font-weight: bold;
    margin-top: 15px;
  }

  & > .remaining{
    font-style: italic;
  }
`

const Images = styled.div`
  background-color: #ffffff;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  height: 200px;
  width: 500px;
  margin: 0 auto;

`

interface props{
  option1: Entity;
  option2: Entity;
  onOptionSelected: any;
}

const ImagePicker = ({option1, option2, onOptionSelected}:props) => {
  const [optionSelected, setOptionSelected] = useState('');

  const onSelect = (selected:Entity) => {
    // if(!!optionSelected) return;

    const selection = selected.id === option1.id ? 'option1' : 'option2';
    setOptionSelected(selection);
    onOptionSelected(selected);
  }

  return <Container>
    <p className="title"> Cattle Royal </p>
    <p className="subtitle"> Pick the best Cow... </p>

    <Images>
      <SelectableImage entity={option1} selected={optionSelected==='option1'} onClick={onSelect}/>
      <SelectableImage entity={option2} selected={optionSelected==='option2'} onClick={onSelect}/>
    </Images>

    <p className="remaining"> 24 matchups remaining </p>

  </Container>
};

export default ImagePicker;