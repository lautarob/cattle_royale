import styled from 'styled-components';
import { Entity } from '../../models/entity';

const ImageContainer = styled.div`
  position: relative;

  & > .check{
    background-color: #1467B0;
    height: 50px;
    width: 50px;
    display: none;
    font-size: 40px;
    border: 5px solid #ffffff;
    border-radius: 50%;
    font-weight: bold;
  }

  &.selected{
    & > .check{
      display: inline-block;
      position: absolute;
      top: calc(50% - 25px);
      left: calc(50% - 25px);
    }
  }
`

interface props {
  entity: Entity;
  selected: Boolean;
  onClick: any;
}

const Image = styled.img`
  width: 100%;  
  height:100%;
`

const SelectableImage = ({entity, selected, onClick}:props) => (
  <ImageContainer className={selected ? 'selected' : ''} onClick={() => onClick(entity)}>
    <Image src={entity.webformatURL}/>
    <span className="check">
      ✓
    </span>
  </ImageContainer>
)

export default SelectableImage;