const Footer = () => {
  return (
    <>
      <footer className="footer md:footer-horizontal bg-brand-black p-10 text-white">
        <a className="hidden md:block" href="/">
          <img src="/images/logo.png" alt="Logo" width={240} height={75} />
        </a>
        <div className="flex flex-col gap-4">
          <h5 className="footer-title">Telefon</h5>
          <p>
            Adwokat Elżbieta Głuszek-Manikowska:{' '}
            <a href="tel:604415880" className="hover:text-brand-gold">
              604 415 880
            </a>
          </p>
          <p>
            Adwokat Wojciech Manikowski:{' '}
            <a href="tel:602466126" className="hover:text-brand-gold">
              602 466 126
            </a>
          </p>
          <p>
            Adwokat Dagmara Manikowska-Sokal:{' '}
            <a href="tel:600311491" className="hover:text-brand-gold">
              600 311 491
            </a>
          </p>
          <p>
            Adwokat Maciej Sokal:{' '}
            <a href="tel:606712391" className="hover:text-brand-gold">
              606 712 391
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="footer-title">Email</h5>
          <p>
            Adwokat Elżbieta Głuszek-Manikowska:{' '}
            <a href="mailto:elwmaniks@wp.pl" className="hover:text-brand-gold">
              elwmaniks@wp.pl
            </a>
          </p>
          <p>
            Adwokat Wojciech Manikowski:{' '}
            <a href="mailto:elwmaniks@wp.pl" className="hover:text-brand-gold">
              elwmaniks@wp.pl
            </a>
          </p>
          <p>
            Adwokat Dagmara Manikowska-Sokal:{' '}
            <a href="mailto:sokalby@interia.pl" className="hover:text-brand-gold">
              sokalby@interia.pl
            </a>
          </p>
          <p>
            Adwokat Maciej Sokal:{' '}
            <a href="mailto:msokal@kancelarieadwokackie.net.pl" className="hover:text-brand-gold">
              msokal@kancelarieadwokackie.net.pl
            </a>
          </p>
        </div>
      </footer>
      <div className="footer md:footer-horizontal footer-center bg-brand-black border-brand-gray/50 border-t p-4 text-white">
        <p className="text-brand-gray-light text-sm">
          &copy; {new Date().getFullYear()} - Kancelaria Adwokacka Manikowscy Sokal
        </p>
      </div>
    </>
  );
};

export default Footer;
