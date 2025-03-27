import type React from 'react'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {children}
    </div>
  )
}
