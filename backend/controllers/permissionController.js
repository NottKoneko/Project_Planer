const supabase = require('../config');

exports.assignPermission = async (req, res) => {
    try {
      Permission.validate(req.body); // Validate permission data
      const { user_id, project_id, role } = req.body;
      const { data, error } = await supabase
        .from('Permissions')
        .insert([{ user_id, project_id, role }]);
      if (error) return res.status(400).json({ error: error.message });
      res.status(201).json(data);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

// Get permissions for a project
exports.getPermissions = async (req, res) => {
  const { project_id } = req.params;
  const { data, error } = await supabase
    .from('Permissions')
    .select('*')
    .eq('project_id', project_id);
  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json(data);
};
