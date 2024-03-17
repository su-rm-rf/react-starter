import React, { Suspense, useEffect, useState } from 'react'
import Loading from '@/views/common/Loading'
import { useLocation, useRoutes } from 'react-router'
import { routes } from '@/router'
import Footer from '@/views/common/Footer'

export default function App() {
  const location = useLocation()
  let [showFooter, setShowFooter] = useState(false)
  
  useEffect(() => {
    const path = location.pathname
    if (path === '/goods' || path === '/cart' || path === '/mine') {
      setShowFooter(true)
    } else {
      setShowFooter(false)
    }
  }, [location.pathname])

  return (
    <>
      <div className={ "main-body" + " " + `${ showFooter ? '' : 'no-footer' }` }>
        <Suspense fallback={ <Loading /> }>
          { useRoutes(routes) }
        </Suspense>
      </div>
      {
        showFooter && <Footer />
      }
    </>
  )
}