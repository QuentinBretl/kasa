import BannerImage from '../components/assets/banner-about.png';
import Dropdown from '../components/shared/Dropdown';

function About() {
  const bannerStyle = {
    backgroundImage: 'url(' + BannerImage + ')',
  };

  return (
    <main className='about'>
      <div className='banner' style={bannerStyle}></div>
      <Dropdown name='Fiabilité' long={true}>
        <p className='dropdown-content'>
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </p>
      </Dropdown>
      <Dropdown name='Respect' long={true}>
        <p className='dropdown-content'>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </p>
      </Dropdown>
      <Dropdown name='Service' long={true}>
        <p className='dropdown-content'>
          Nos équipes se tiennent à votre disposition pour vous fournir une
          expérience parfaite. N'hésitez pas à nous contacter si vous avez la
          moindre question.
        </p>
      </Dropdown>
      <Dropdown name='Sécurité' long={true}>
        <p className='dropdown-content'>
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes.
        </p>
      </Dropdown>
    </main>
  );
}

export default About;
