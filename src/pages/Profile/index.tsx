import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { api } from '../../services/api';

import { BiSearch } from 'react-icons/bi';

import orangeLogo from '../../assets/images/orangelogo.png';
import logo from '../../assets/images/profilelogo.png';
import avatar from '../../assets/images/user.png';
import style from './style.module.css';

type Course = {
  id: string;
  title: string;
};

export const Profile = () => {
  const user = JSON.parse(localStorage.getItem('@hackathon:user')!);

  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const getUserInfo = async () => {
      const response = await api.get('/users/me');

      if (response.status !== 200) return;

      setCourses(response.data);
    };

    getUserInfo();
  }, []);

  return (
    <>
      <div className={style.cabecalho}>
        <img
          className={style.logo}
          src={logo}
          alt="Logo da Orange Juice Evolution"
        />
        <div className={style.nav}>
          <div>
            <Link className={style.home} to="/">
              Home
            </Link>
          </div>
          <div className={style.divInput}>
            <BiSearch />
            <input className={style.input} type="text" />
          </div>
        </div>
      </div>
      <div className={style.user}>
        <img className={style.foto} src={avatar} alt="Imagem de perfil" />
        <span className={style.nome}>@{user?.name}</span>
      </div>
      <div className={style.tituloCursos}>
        <span>MEUS CURSOS</span>
      </div>
      <div className={style.cursos}>
        {courses.map((course) => (
          <Link
            className={style.cardCurso}
            key={course.id}
            to={`/course/${course.id}`}
          >
            <div>
              <h2 className={style.nomeCurso}>{course.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
