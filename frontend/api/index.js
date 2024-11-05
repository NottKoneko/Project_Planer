import axios from 'axios';

export const fetchTeams = async () => {
  const response = await axios.get('http://localhost:5000/teams');
  return response.data;
};

export const fetchProjects = async (teamId) => {
  const response = await axios.get(`http://localhost:5000/projects/team/${teamId}`);
  return response.data;
};
