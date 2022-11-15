import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { MdOndemandVideo, MdOutlineArticle } from 'react-icons/md';
import { HiOutlineAcademicCap } from 'react-icons/hi';

import { api } from '../../services/api';
import { BiSearch } from 'react-icons/bi';
import { IoIosReturnLeft } from 'react-icons/io';

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
        <div>
          <img src="https://via.placeholder.com/150 " alt="Logo" />
        </div>
        <div>
          <Link to="/">Home</Link>
          <div>
            <BiSearch />
            <input type="text" />
          </div>
        </div>
        <div>
          <div>
            {contents?.map((content) => (
              <div key={content.id}>
                <div>
                  <h3>{content.title}</h3>
                  <span>{content.creator}</span>
                </div>
                <div>{getIconFromType(content.type)}</div>
                <button onClick={() => handleAcess(content.url)}>
                  Acessar
                </button>
              </div>
            ))}
          </div>
          <div>
            <div>
              <h3>Progresso</h3>
            </div>
            <div>
              <p>Trilha montada por {trail.creator}</p>
            </div>
            <div>
              <p>{trail.description}</p>
            </div>
            <div>
              <Link to="/profile">
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
