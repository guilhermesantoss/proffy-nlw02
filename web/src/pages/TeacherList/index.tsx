import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';

import './styles.css';

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState([]);
  
  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');
  
  const [proffyNotFound, setProffyNotFound] = useState('');
  
  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    if (!subject || !week_day || !time) {
      return;
    }

    const response = await api.get('/classes', {
      params: {
        subject,
        week_day,
        time
      }
    });

    if (response.data.length > 0) {
      setProffyNotFound("Nenhum professor encontrado com sua pesquisa.");
    }

    setTeachers(response.data);
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={e => setSubject(e.target.value)}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Educação Física', label: 'Educação Física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'Artes' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Química', label: 'Química' },
              { value: 'Sociologia', label: 'Sociologia' },
            ]}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            value={week_day}
            onChange={e => setWeekDay(e.target.value)}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
          />
          <Input
            type="time"
            name="time"
            label="Hora"
            value={time}
            onChange={e => setTime(e.target.value)}
          />

          <button type="submit">
            Buscar
          </button>
        </form>
      </PageHeader>
 
      <main>
        {
          teachers.length > 0
          ?
          teachers.map((teacher: Teacher) => (
            <TeacherItem key={teacher.id} teacher={teacher} />
          ))
          :
          <p className="proffy-not-found">
            {proffyNotFound}
          </p>
        }
        {/* 
        
        <TeacherItem
          imgURL="https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4"
          name="Mayk Brito"
          subject="Geografia"
          description="As vezes não sei nem onde eu tô, mas consigo me localizar facilmente em qualquer lugar. Tenho memória fotográfica e nunca fico perdido. Eu ensino a galera como não se perder na vida, com lições geográficas simples pra você nunca mais precisar de mapa na sua bela vida."
          priceHour={360}
        /> */}
      </main>
    </div>
  );
}

export default TeacherList;
