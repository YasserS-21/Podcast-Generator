import React from 'react'

export default function UserTextArea({userTextInput, setUserTextInput}) {
    console.log(userTextInput)
  return (
    <>
        <textarea
            value={userTextInput}
            onChange={(e) => setUserTextInput(e.target.value)}
            placeholder="Enter your text here..."
            rows={4}
            className="text-input"
        />
    </>
  )
}
