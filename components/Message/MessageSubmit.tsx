import React from 'react'
import { Message } from 'semantic-ui-react'

function MessageSubmit () {
  return (
    <Message
    success
    header='Your message has been sent successfully'
    content='Now Luis will contact you by email'
  />
  )
}

export default MessageSubmit