import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { MdOndemandVideo, MdOutlineArticle } from 'react-icons/md';
import { HiOutlineAcademicCap } from 'react-icons/hi';

import { api } from '../../services/api';
import { BiSearch } from 'react-icons/bi';
import { IoIosReturnLeft } from 'react-icons/io';

import logo from '../../assets/images/profilelogo.png';
import style from './style.module.css';

type Content = {
  id: string;
  title: string;
  type: string;
  creator: string;
  duration: number;
  url: string;
};

type Trail = {
  id: string;
  title: string;
  description: string;
  creator: string;
  duration: number;
};

type TRet = {
  [key: string]: JSX.Element;
};

const getIconFromType = (type: string) => {
  const t: TRet = {
    artigo: <MdOutlineArticle />,
    video: <MdOndemandVideo />,
    curso: <HiOutlineAcademicCap />,
  };

  return t[type];
};

export const CourseContent = () => {
  const { id } = useParams();

  const [contents, setContents] = useState<Content[]>([]);
  const [trail, setTrail] = useState<Trail>({} as Trail);

  useEffect(() => {
    const getContent = async () => {
      const response = await api.get<Content[]>(`/users/me/courses/${id}`);

      if (response.status !== 200) return;

      setContents(response.data);
    };

    const getTrailInfo = async () => {
      const response = await api.get(`/users/me/courses/${id}/info`);

      if (response.status !== 200) return;

      setTrail(response.data);
    };

    getTrailInfo();
    getContent();
  }, []);

  const handleAcess = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <>
      <div>
        <div className={style.cabecalho}>
          <div>
            <img className={style.logo} src={logo} alt="Logo" />
          </div>
          <div className={style.nav}>
            <Link className={style.home} to="/">
              Home
            </Link>
            <div className={style.divInput}>
              <BiSearch />
              <input className={style.input} type="text" />
            </div>
          </div>
        </div>
        <div className={style.container}>
          <div className={style.conteudos}>
            {contents?.map((content) => (
              <div key={content.id}>
                <div className={style.cabecalhoConteudo}>
                  <div className={style.infoConteudo}>
                    <h3 className={style.tituloConteudo}>{content.title}</h3>
                    <span className={style.criadorConteudo}>
                      {content.creator}
                    </span>
                  </div>
                  <div>{getIconFromType(content.type)}</div>
                </div>
                <button onClick={() => handleAcess(content.url)}>
                  Acessar
                </button>
              </div>
            ))}
          </div>
          <div className={style.coluna}>
            <div className={style.progresso}>
              <h3>Progresso</h3>
            </div>
            <div className={style.criador}>
              <p>Trilha montada por {trail.creator}</p>
            </div>
            <div className={style.descricao}>
              <p>{trail.description}</p>
            </div>
            <div className={style.botaoVoltar}>
              <Link className={style.linkVoltar} to="/profile">
                <IoIosReturnLeft />
                Voltar para meus cursos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
