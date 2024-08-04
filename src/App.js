import './App.scss';
import logo_img from './assets/logo.svg'
import hero_left from './assets/desktop/image-hero-left.png'
import hero_right from './assets/desktop/image-hero-right.png'
import hero_merge from './assets/tablet/image-hero.png'
import woman_videocall from './assets/desktop/image-woman-in-videocall.jpg'
import women_chatting from './assets/desktop/image-women-videochatting.jpg'
import men_meeting from './assets/desktop/image-men-in-meeting.jpg'
import man_texting from './assets/desktop/image-man-texting.jpg'
import mobile_footer from './assets/mobile/image-footer.jpg'
import tablet_footer from './assets/tablet/image-footer.jpg'
import desktop_footer from './assets/desktop/image-footer.jpg'

function App({data}) {
  const { quote, description, download_button, download_version, what_button, section_1, section_1_title, section_1_quote, section_1_description, section_2, section_2_title, section_2_description } = data;

  const image_files = [
    woman_videocall,
    women_chatting,
    men_meeting,
    man_texting
  ];

  const images_to_show = image_files.slice(0, 4);

  return (
    <div className="app">
      <img className="logo" src={logo_img} alt="logo" />
      <header>
        <div className="hero_container">
          <img className="hero_left" src={hero_left} alt="hero left" />
          <img className="hero_right" src={hero_right} alt="hero right" />
          <img className="hero_merge" src={hero_merge} alt="hero" />
        </div>
        <div className="app_header">
          <p className="app_quote">{quote}</p>
          <p className="app_desc">{description}</p>
          <div className="button_container">
            <button className="download_btn">
              <span className="download_text">{download_button}</span> <span className="download_version">{download_version}</span>
            </button>
            <button className="what_btn">{what_button}</button>
          </div>
        </div>
      </header>

      <main>
        <div className="section_1">
          <div className="connected_line"></div>
          <div className="circle_number">{section_1}</div>
        </div>
        <div className="main_images_container">
          {images_to_show.map((image, index) => (
            <div key={index} className={`main_image_container image-${index % 4}`}>
              <img
                className="main_image"
                src={image}
                alt={`icon-${index + 1}`}
              />
            </div>
          ))}
        </div>
        <p className="sect_1_title">{section_1_title}</p>
        <p className="sect_1_quote">{section_1_quote}</p>
        <p className="sect_1_desc">{section_1_description}</p>
      </main>

      <footer>
        <div className="section_2">
          <div className="connected_line"></div>
          <div className="circle_number">{section_2}</div>
        </div>
        <div className="footer_container">
          <div className="footer_bg">
            <div className="footer_overlay"></div>
            <img className="mobile_footer" src={mobile_footer} alt="mobile foooter" />
            <img className="tablet_footer" src={tablet_footer} alt="tablet footer" />
            <img className="desktop_footer" src={desktop_footer} alt="desktop footer" />
          </div>
          <div className="footer_content">
            <p className="sect_2_title">{section_2_title}</p>
            <p className="sect_2_desc">{section_2_description}</p>
            <div className="buttons">
              <button className="download_btn">
                <span className="download_text">{download_button}</span> <span className="download_version">{download_version}</span>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
