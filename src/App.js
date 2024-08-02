import './App.scss';
import logo_img from './assets/logo.svg'
import woman_videocall from './assets/desktop/image-woman-in-videocall.jpg'
import women_chatting from './assets/desktop/image-women-videochatting.jpg'
import men_meeting from './assets/desktop/image-men-in-meeting.jpg'
import man_texting from './assets/desktop/image-man-texting.jpg'

function App({data}) {
  const { quote, description, download_button, what_button, section_1, section_1_title, section_1_quote, section_1_description, section_2, section_2_title, section_2_description } = data;

  const image_files = [
    woman_videocall,
    women_chatting,
    men_meeting,
    man_texting
  ];

  const images_to_show = image_files.slice(0, 4);

  return (
    <div className="app">
      <header>
        <img className="logo" src={logo_img} alt="logo" />
        <div className="hero_faces"></div>
        <div className="app_header">
          <p className="app_quote">{quote}</p>
          <p className="app_desc">{description}</p>
          <div className="buttons">
            <button className="download_btn">{download_button}</button>
            <button className="what_btn">{what_button}</button>
          </div>
        </div>
      </header>
      <main>
        <p className="section_icon">{section_1}</p>
        {images_to_show.map((image, index) => (
          <img
            key={index}
            className={`main_images index-${index}`}
            src={image}
            alt={`icon-${index + 1}`}
          />
        ))}
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
