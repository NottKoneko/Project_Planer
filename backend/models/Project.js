class Project {
    constructor({ id, name, description, team_id, created_by, created_at }) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.team_id = team_id;
      this.created_by = created_by;
      this.created_at = created_at;
    }
  
    static validate(projectData) {
      if (!projectData.name) {
        throw new Error("Project name is required");
      }
      if (!projectData.team_id) {
        throw new Error("Team ID is required");
      }
      if (!projectData.created_by) {
        throw new Error("Creator (created_by) is required");
      }
      return true;
    }
  }
  
  module.exports = Project;
  