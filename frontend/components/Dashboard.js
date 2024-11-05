import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTeams, fetchProjects } from '../api';

const Dashboard = () => {
  const [teams, setTeams] = useState([]);
  const [projects, setProjects] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);

  useEffect(() => {
    const loadTeams = async () => {
      const data = await fetchTeams();
      setTeams(data);
    };
    loadTeams();
  }, []);

  const handleTeamClick = async (teamId) => {
    setSelectedTeam(teamId);
    const data = await fetchProjects(teamId);
    setProjects(data);
  };

  return (
    <div className="dashboard">
      <aside className="team-list">
        {teams.map((team) => (
          <button key={team.id} onClick={() => handleTeamClick(team.id)}>
            {team.name}
          </button>
        ))}
      </aside>
      <section className="project-list">
        {projects.map((project) => (
          <Link key={project.id} to={`/projects/${project.id}`}>
            {project.name}
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Dashboard;
