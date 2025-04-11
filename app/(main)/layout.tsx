import React, { ReactNode } from 'react'

export default function mainLayout({children}:
    {children:ReactNode}) {
  return (
    <div>
      {children}
    </div>
  )
}
