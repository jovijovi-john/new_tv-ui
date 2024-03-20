import React from 'react'
import Page from '../../components/Page'
import Header from '../../components/Header'

export default function CreateProfile() {
  return (
    <Page>
      <Header title='Criando seu Perfil Smart TV' />
      <div></div>
      <main>
        <input type="text" />
        <div className='text-white'>
          <label><input type="checkbox" /> Este é um perfil de grupo (ex: Família, Hóspedes...)</label>
        </div>
        <input type="text" />
      </main>
    </Page>
  )
}
