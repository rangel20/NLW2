import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/29238500?s=460&u=86c4788399b6c116edd25c97933f8fd88c21b3fc&v=4" alt="Rangel Paolo"/>
        <div>
          <strong>Rangel Paolo</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br />
        Apaixonado por explodir coisas em laboratórios e po mudar a vida das pessoas através do experiências.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>RS 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
