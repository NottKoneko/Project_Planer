class Permission {
    constructor({ id, user_id, project_id, role, created_at }) {
      this.id = id;
      this.user_id = user_id;
      this.project_id = project_id;
      this.role = role;
      this.created_at = created_at;
    }
  
    static validate(permissionData) {
      if (!permissionData.user_id) {
        throw new Error("User ID is required");
      }
      if (!permissionData.project_id) {
        throw new Error("Project ID is required");
      }
      if (!["Owner", "Editor", "Viewer"].includes(permissionData.role)) {
        throw new Error("Invalid role. Must be 'Owner', 'Editor', or 'Viewer'");
      }
      return true;
    }
  }
  
  module.exports = Permission;
  