import React, { useState } from 'react';
import Page from '../../components/Page';
import Header from '../../components/Header';

export default function CreateProfile() {
  const [isChecked, setIsChecked] = useState(false);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setIsChecked(!isChecked);
    }
  };

  return (
    <Page>
      <Header title='Criando seu Perfil Smart TV' />
      <div></div>
      <main>
        <input type="text" />
        <div className='text-white'>
          <label>
            <input
              type="checkbox"
              id='teste'
              name='teste'
              value={'teste'}
              checked={isChecked}
              onKeyDown={handleKeyPress}
              onChange={() => setIsChecked(!isChecked)}
            />
            Este é um perfil de grupo (ex: Família, Hóspedes...)
          </label>
        </div>
        <input type="text" />
      </main>
    </Page>
  );
}
