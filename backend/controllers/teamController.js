const supabase = require('../config');
const Team = require('../models/Team');

exports.createTeam = async (req, res) => {
    try {
      Team.validate(req.body); // Validate team data
      const { name, description, created_by } = req.body;
      const { data, error } = await supabase
        .from('Teams')
        .insert([{ name, description, created_by }]);
      if (error) return res.status(400).json({ error: error.message });
      res.status(201).json(data);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

// Get all teams for a user
exports.getTeams = async (req, res) => {
  const { user_id } = req.params;
  const { data, error } = await supabase
    .from('Teams')
    .select('*')
    .eq('created_by', user_id);
  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json(data);
};
