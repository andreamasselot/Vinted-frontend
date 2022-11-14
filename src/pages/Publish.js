const Publish = () => {
  return (
    <>
      <section className="background-2">
        <div className="publish-offer-container">
          <h1>Vends ton article</h1>
          <form className="files">
            <input type="file" name="file" />
          </form>
          <form>
            <div className="publish-details">
              <h2>Title</h2>
              <input
                type="text"
                name="title-description"
                placeholder="ex: Chemise Sézane verte"
              />
            </div>
            <div className="publish-details">
              <h2>Décris ton article</h2>
              <input
                type="text"
                name="description"
                placeholder="ex: porté quelque fois, taille correctement"
              />
            </div>
          </form>
          <form>
            <div className="publish-details">
              <h2>Marque</h2>
              <input type="text" placeholder="ex: Zara" />
            </div>
            <div className="publish-details">
              <h2>Taille</h2>
              <input type="text" placeholder="ex: L/40/12" />
            </div>
            <div className="publish-details">
              <h2>Couleur</h2>
              <input type="text" placeholder="ex: Fushia" />
            </div>
            <div className="publish-details">
              <h2>Etat</h2>
              <input type="text" placeholder="ex: Neuf avec étiquette" />
            </div>
            <div className="publish-details">
              <h2>Lieu</h2>
              <input type="text" placeholder="ex: Paris" />
            </div>
          </form>
          <form>
            <h2>Prix</h2>
            <div className="publish-details">
              <input type="text" placeholder="0,00€" />
              <input type="checkbox" name="checkbox" />
              <label For="checkbox">
                Je suis intéressé(e) par les échanges{" "}
              </label>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Publish;
