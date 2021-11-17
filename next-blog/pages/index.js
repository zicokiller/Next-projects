import Link from "next/link";

export default function Home() {
  return (
    <div className="container px-4 pt-5">
      <h1>Bienvenue sur Code.io</h1>
      <span>Le blog communautaire des fans de développement web</span>
      <div className="row mt-5">
        <div className="col-12 col-sm-6" style={{minHeight: "200px"}}>
          <div className="card w-100 h-100">
            <div className="card-body">
              <h5 className="card-title">Lisez les articles</h5>
              <h6 className="card-subtitle mb-2 text-muted">Faites grandir votre culture web</h6>
              <p className="card-text">Chaque auteur souhaite vous apporter le maximum de valeur ajoutée par article</p>
              <Link href="/blog">
                <a>Visitez le Blog</a>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6" style={{minHeight: "200px"}}>
          <div className="card w-100 h-100">
            <div className="card-body">
              <h5 className="card-title">Consultez la liste de nos membres</h5>
              <h6 className="card-subtitle mb-2 text-muted">Rencontrez d&apos;autres devs</h6>
              <p className="card-text">Ajoutez, invitez, discutez avec les différents membres</p>
              <Link href="/utilisateur">
                <a>Découvrez la liste de nos membres</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
