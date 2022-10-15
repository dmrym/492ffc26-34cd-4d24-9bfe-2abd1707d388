import React, { Fragment } from 'react'
import { Aside } from './Aside'
import { Content } from './Content'
import { Footer } from './Footer'
import { Header } from './Header'

interface ILayout {
  children: React.ReactNode
}
export const Layout: React.FC<ILayout> = ({children}) => {
  return (
    <main>
      <Header />
      <Aside />
      <Content>
        {children}
      </Content>
      <Footer />
    </main>
  )
}
