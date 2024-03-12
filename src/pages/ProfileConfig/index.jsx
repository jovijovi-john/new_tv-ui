import React from 'react'

import Page from '../../components/Page'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import AudioDescButton from '../../components/AudioDescButton'
import LibrasButton from '../../components/LibrasButton'

export default function ProfileConfig() {
  return (
    <Page>
      <Header title='Configuração de Perfil'></Header>

      <main className='flex-1 flex items-center justify-center bg-red-500 w-full'>
        Pagina de perfil
      </main>

      <Footer classNames={"flex gap-5"}>
        <AudioDescButton />
        <LibrasButton />
      </Footer>
    </Page>
  )
}
