import React from 'react'

const TimeBlockInfo = (props) => {

  const fakeBlock = {
    id: props.blockId,
    color: "blue",
    title: "b-roll"
  }

  const renderBlockDetailsOrForm = () => {
    if (fakeBlock.id === "new") {
      return(
        <div>
          form
        </div>
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