import React, { useState } from 'react';
import { AddContainer } from './styles'

export default function App () {
  const [textAreaValue, setTextAreaValue] = useState('0')

  const onChangeGetText = (event) => {
    let words = (event.target.value)
    words = words.replace(/(^\s*)|(\s*$)/gi,'');
    words = words.replace(/[ ]{2,}/gi,' ');
    words = words.replace(/(\n )|(\n)|( \n)/gi,' ');

    if ((words === '')||(words === ' ')){
      setTextAreaValue("0");
    } else {
      words = words.split(' ').length;
      setTextAreaValue(words)
    }  
  }

  return (
    <AddContainer>
      <h1>Contador de palavras: {textAreaValue}</h1>
      <textarea rows='20' placeholder='Cole ou digite seu texto aqui'
        onChange={onChangeGetText}> 
      </textarea>
    </AddContainer>
  );
}
