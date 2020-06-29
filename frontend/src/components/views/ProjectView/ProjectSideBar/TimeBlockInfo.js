import React from 'react'
import NewTimeBlockForm from './NewTimeBlockForm'

const TimeBlockInfo = (props) => {

  const fakeBlock = {
    id: props.blockId,
    color: "blue",
    title: "b-roll"
  }

  const renderBlockDetailsOrForm = () => {
    if (fakeBlock.id === "new") {
      return(
        <NewTimeBlockForm />
      )
    }
    return(
      <div>
        {fakeBlock.title}
      </div>
    )
  }

  return(
    <div className="block-details">
      {renderBlockDetailsOrForm()}
    </div>
  )
}

export default TimeBlockInfo