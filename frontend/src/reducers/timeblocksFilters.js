// pass in normalized redux store of timeblocks and timeline_id and return an ARRAY of timelines belonging to that timeline
export const selectTimelineTimeBlocks = (timeBlocks, timeline_id) => {
  return timeBlocks.allIds.map((id) => timeBlocks.byId[id]).filter((tb) => tb.timeline_id === timeline_id)
}