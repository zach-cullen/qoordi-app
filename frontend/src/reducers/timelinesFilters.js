
// pass in normalized redux store of timelines and project_id and return an array of timelines belonging to that project
export const selectProjectTimelines = (timelines, project_id) => {
  return timelines.allIds.map((id) => {
    const timeline = timelines.byId[id]
    if (timeline.project_id === project_id) {
      return timeline
    }
  })
}