import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';

import './styles.css';

const TeacherList: React.FC = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <Input
            name="subject"
            label="Matéria"
          />
          <Input
            name="week_day"
            label="Dia da semana"
          />
          <Input
            type="time"
            name="time"
            label="Hora"
          />
        </form>
      </PageHeader>
 
      <main>
        <TeacherItem
          imgURL="https://avatars3.githubusercontent.com/u/16351117?s=460&u=157575a4f7bc20221f4693aa045fd800654c7016&v=4"
          name="Guilherme Santos"
          subject="Química"
          description="Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões."
          priceHour={100}
        />
        <TeacherItem
          imgURL="https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4"
          name="Diego Fernandes"
          subject="Ciências"
          description="Instrutor de Educação Física para iniciantes, minha missão de vida é levar saúde e contribuir para o crescimento de quem se interessar. Comecei a minha jornada profissional em 2001, quando meu pai me deu dois alteres de 32kg com a seguinte condição: 'Aprenda a fazer dinheiro com isso!'"
          priceHour={150}
        />
        <TeacherItem
          imgURL="https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4"
          name="Mayk Brito"
          subject="Geografia"
          description="As vezes não sei nem onde eu tô, mas consigo me localizar facilmente em qualquer lugar. Tenho memória fotográfica e nunca fico perdido. Eu ensino a galera como não se perder na vida, com lições geográficas simples pra você nunca mais precisar de mapa na sua bela vida."
          priceHour={360}
        />
      </main>
    </div>
  );
}

export default TeacherList;
