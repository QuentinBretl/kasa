import { Link } from 'react-router-dom';

function Page404() {
  return (
    <main className='not-found'>
      <section className='not-found-content'>
        <h1 className='not-found-title'>404</h1>
        <h2 className='not-found-subtitle'>
          Oups! La page que vous demandez n'existe pas.
        </h2>
        <Link className='not-found-redirection' to='/'>
          <p className='not-found-redirection-text'>
            Retourner sur la page d'accueil
          </p>
        </Link>
      </section>
    </main>
  );
}

export default Page404;
