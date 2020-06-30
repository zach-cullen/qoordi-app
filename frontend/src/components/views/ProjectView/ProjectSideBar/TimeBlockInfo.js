import React from 'react'
import { connect } from 'react-redux'
import NewTimeBlockForm from './NewTimeBlockForm'

const TimeBlockInfo = (props) => {

  const thisBlock = props.timeBlocks.byId[props.blockId]

  const renderBlockDetailsOrForm = () => {

    if (props.blockId === null) {
      console.log("no block Id")
      return(
        <div>
          Project
        </div>
      )
    }

    if (props.blockId === 0) {
      return(
        <NewTimeBlockForm project={props.project} timeblock={thisBlock}/>
      )
    }

    return(
      <div>
        {thisBlock.title}
      </div>
    )
  }

  return(
    <div className="block-details">
      {renderBlockDetailsOrForm()}
    </div>
  )
}

const MapStateToProps = (state) => {
  return {
    timeBlocks: state.entities.timeblocks
  }
}

export default connect(MapStateToProps)(TimeBlockInfo)