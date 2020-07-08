import React from 'react'
import { connect } from 'react-redux'
import NewTimeBlockForm from './NewTimeBlockForm'
import UpdateTimeBlockForm from './UpdateTimeBlockForm'

const TimeBlockInfo = (props) => {

  const thisBlock = props.timeBlocks.byId[props.blockId]

  const renderBlockDetailsOrForm = () => {

    if (props.blockId === null) {
      return(
        <div id="#sidebar-project-info">
        </div>
      )
    }

    if (props.blockId === 0) {
      return(
        <NewTimeBlockForm 
          project={props.project} 
          timeblock={thisBlock}
          setSideBarBlockId={props.setSideBarBlockId}
        />
      )
    }

    return(
      <UpdateTimeBlockForm
        project={props.project}
        timeblock={thisBlock}
        key={thisBlock.id}
        setSideBarBlockId={props.setSideBarBlockId}
      />
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