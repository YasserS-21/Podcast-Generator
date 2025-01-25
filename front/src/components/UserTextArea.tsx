import React from 'react'

/**
 * Text input component for user's podcast content
 * Props:
 * - userTextInput: Current text input value
 * - setUserTextInput: Function to update text input
 */
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
