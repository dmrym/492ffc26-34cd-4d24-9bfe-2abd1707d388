import React from 'react'

interface IContent {
  children: React.ReactNode
}
export const Content:React.FC<IContent> = ({children}) => {
  return (
    <section>{children}</section>
  )
}
