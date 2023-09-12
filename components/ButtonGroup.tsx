import React from 'react'

interface ButtonGroupProps {
    firstBtn: string;
    secondBtn: string;
  }


const ButtonGroup: React.FC<ButtonGroupProps> = ({ firstBtn, secondBtn }) => {
    const numberOfBlocks = 4;

    const generateBlocks = () => {
      const blocks = [];
      for (let i = 0; i < numberOfBlocks; i++) {
        blocks.push(
          <div key={i} className="block" />
        );
      }
      return blocks;
    };
  
  
    return (
    <>
        <div className=" block-txt">{firstBtn}</div>
        <div className="square" />
        <div className="block-txt">{secondBtn}</div>
    </>
  )
}

export default ButtonGroup;



