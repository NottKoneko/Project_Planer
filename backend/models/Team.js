class Team {
    constructor({ id, name, description, created_by, created_at }) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.created_by = created_by;
      this.created_at = created_at;
    }
  
    // Optional static method to validate team data
    static validate(teamData) {
      if (!teamData.name) {
        throw new Error("Team name is required");
      }
      if (!teamData.created_by) {
        throw new Error("Creator (created_by) is required");
      }
      // Add more validation rules as needed
      return true;
    }
  }
  
  module.exports = Team;
  