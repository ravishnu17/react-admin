import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div className="ms-auto">
        <span className="me-1">Powered by @
        <a href="https://www.boscosofttech.com/" target="_blank" rel="noopener noreferrer">
        boscosofttech
        </a>
        </span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
