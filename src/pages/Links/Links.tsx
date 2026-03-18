import { useEffect } from 'react'

function Links() {
  useEffect(() => {
    document.title = 'CY Mídia — Links'
  }, [])

  return <h1>Links</h1>
}

export default Links