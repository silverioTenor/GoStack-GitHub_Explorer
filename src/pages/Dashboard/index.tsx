import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import { Header, Repositories } from './styles';

import logo from '../../assets/logo.svg';
import avatar from '../../assets/user.jpg';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header>
        <img src={logo} alt="GitHub Explorer" />

        <h1>Explore repositórios no GitHub.</h1>

        <form>
          <input type="text" placeholder="Digite o nome do repositório" />

          <button type="submit">Pesquisar</button>
        </form>
      </Header>

      <Repositories>
        <Link to="/">
          <img src={avatar} alt="" />

          <div className="content">
            <strong>silverioTenor/GoBarber</strong>
            <p>Descrição</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Repositories>
    </>
  );
};

export default Dashboard;
