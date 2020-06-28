
// pass in normalized redux store of timelines and project_id and return an array of timelines belonging to that project
export const selectProjectTimelines = (timelines, project_id) => {
  return timelines.allIds.map((id) => timelines.byId[id]).filter((t) => t.project_id === project_id)
}