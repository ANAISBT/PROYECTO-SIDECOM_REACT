import { CardWidget } from "./CardWidget";
import { ItemListConteiner } from "./ItemListConteiner";

export const NavBar = () => {
    return (
    <section>
        <nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">SIDECOM</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Polos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Casacas</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pantalones</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Gorros</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Medias</a>
        </li>
      </ul>
    </div>
    <CardWidget/>
  </div>
</nav>
<ItemListConteiner nombre={'El componente está en construcción'}/>
</section>
    );
};