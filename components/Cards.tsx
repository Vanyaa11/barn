import React from 'react';

export default function () {

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
          <div className="title ">€ 5,00 PER CONSEGNA <br/> NO ORDINE MINIMO</div>
          <div className='button-group-container'>
            {generateBlocks()}
          </div>
          <div className='button-group-container'>
            {generateBlocks()}
          </div>
        </>
      );
}



