const Publish = () => {
  return (
    <>
      <section className="background">
        <h1>Vends ton article</h1>
        <form className="files">
          <input type="file" name="file" />
        </form>
        <form>
          <div className="publish-title">
            <h2>Title</h2>
            <input
              type="text"
              name="title-description"
              placeholder="ex: Chemise Sézane verte"
            />
          </div>
          <div>
            <h2>Décris ton article</h2>
            <input
              type="text"
              name="description"
              placeholder="ex: porté quelque fois, taille correctement"
            />
          </div>
        </form>
        <form>
          <div>
            <h2>Marque</h2>
            <input type="text" placeholder="ex: Zara" />
          </div>
          <div>
            <h2>Taille</h2>
            <input type="text" placeholder="ex: L/40/12" />
          </div>
          <div>
            <h2>Couleur</h2>
            <input type="text" placeholder="ex: Fushia" />
          </div>
          <div>
            <h2>Etat</h2>
            <input type="text" placeholder="ex: Neuf avec étiquette" />
          </div>
          <div>
            <h2>Lieu</h2>
            <input type="text" placeholder="ex: Paris" />
          </div>
        </form>
      </section>
    </>
  );
};

export default Publish;
