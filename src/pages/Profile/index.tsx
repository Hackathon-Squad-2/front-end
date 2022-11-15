import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { api } from '../../services/api';

import { BiSearch } from 'react-icons/bi';

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
      <div>
        <img src="https://via.placeholder.com/150" alt="Logo" />
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <BiSearch />
          <input type="text" />
        </div>
      </div>
      <div>
        <img src="https://via.placeholder.com/150" alt="Perfil" />
        <span>@{user?.name}</span>
      </div>
      <div>
        <span>Meus Cursos</span>
      </div>
      {courses.map((course) => (
        <div key={course.id}>
          <h2>{course.title}</h2>
        </div>
      ))}
    </>
  );
};
