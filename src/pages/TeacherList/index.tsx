import React from 'react';
import PageHeader from '../../components/PageHeader';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherList = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day" />
          </div>
          
          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
          
        </form>
      </PageHeader>

      <main>
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
      </main>
    </div>
  );
};

export default TeacherList;
