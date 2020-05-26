import React from 'react'
import { Icon } from 'semantic-ui-react'

const PremiumBlocker = () => {
  return (
    <div id="premium-blocker">
      <h4>This is a premium article</h4><br />
      <h4><Icon name="lock" /></h4>
      <h4>Sign in to view this article</h4>
    </div>
  )
}

export default PremiumBlocker
