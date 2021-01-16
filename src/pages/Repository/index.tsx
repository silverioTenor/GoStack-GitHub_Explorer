import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import { Header, HeaderRepository, Issues } from './styles';

import logo from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api.get<Repository>(`/repos/${params.repository}`).then(response => {
      setRepository(response.data);
    });

    api.get<Issue[]>(`/repos/${params.repository}/issues`).then(response => {
      setIssues([...response.data]);
    });
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={logo} alt="logo" />
        <Link to="/">
          <FiChevronLeft size={20} /> Voltar
        </Link>
      </Header>

      {repository && (
        <HeaderRepository>
          <div>
            <img src={repository.owner.avatar_url} alt="usuário" />
            <div className="content">
              <h1>{repository.full_name}</h1>
              <span>{repository.description}</span>
            </div>
          </div>

          <ul>
            <li>
              <span>{repository.stargazers_count}</span>
              <span>Stars</span>
            </li>
            <li>
              <span>{repository.forks_count}</span>
              <span>Forks</span>
            </li>
            <li>
              <span>{repository.open_issues_count}</span>
              <span>Issues abertas</span>
            </li>
          </ul>
        </HeaderRepository>
      )}

      <Issues>
        {issues.map(issue => (
          <a key={issue.id} href={issue.html_url} rel="noreferrer" target="_blank">
            <div className="contentRepository">
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>

            <FiChevronRight size={24} />
          </a>
        ))}
      </Issues>
    </>
  );
};

export default Repository;
