const supabase = require('../config');
const Project = require('../models/Project');

exports.createProject = async (req, res) => {
    try {
      Project.validate(req.body); // Validate project data
      const { name, description, team_id, created_by } = req.body;
      const { data, error } = await supabase
        .from('Projects')
        .insert([{ name, description, team_id, created_by }]);
      if (error) return res.status(400).json({ error: error.message });
      res.status(201).json(data);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

// Get all projects for a team
exports.getProjectsByTeam = async (req, res) => {
  const { team_id } = req.params;
  const { data, error } = await supabase
    .from('Projects')
    .select('*')
    .eq('team_id', team_id);
  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json(data);
};
