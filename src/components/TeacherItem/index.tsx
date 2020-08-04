import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

interface TeacherItemProps {
  imgURL: string;
  name: string;
  subject: string;
  description: string;
  priceHour: number;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ imgURL, name, subject, description, priceHour }) => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src={imgURL}
          alt={name}
        />
        <div>
          <strong>{name}</strong>
          <span>{subject}</span>
        </div>
      </header>

      <p>
        {description}
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>{`R$ ${priceHour.toFixed(2).replace('.', ',')}`}</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
