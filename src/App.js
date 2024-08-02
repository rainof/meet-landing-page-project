import './App.scss';
import logo_img from './assets/logo.svg'

function App({data}) {
  const { quote, description, download_button, what_button, section_1, section_1_title, section_1_quote, section_1_description, section_2, section_2_title, section_2_description } = data;

  return (
    <div className="app">

      <header>
        <img className="logo" src={logo_img} alt="logo" />
        <div className="hero_faces"></div>
        <p className="app_quote">{quote}</p>
        <p className="app_desc">{description}</p>
        <button className="download_btn">{download_button}</button>
        <button className="what_btn">{what_button}</button>
      </header>

      <main>
        <p className="section_icon">{section_1}</p>
        <p className="sect_1_title">{section_1_title}</p>
        <p className="sect_1_quote">{section_1_quote}</p>
        <p className="sect_1_desc">{section_1_description}</p>
      </main>

      <footer>
        <p className="section_icon">{section_2}</p>
        <p className="sect_2_title">{section_2_title}</p>
        <p className="sect_2_desc">{section_2_description}</p>
      </footer>

    </div>
  );
}

export default App;
