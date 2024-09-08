import './App.css'
function navbar() {
  return (
    <header>
        <div class="jumbotron">
          <h1><strong>Bandung</strong></h1>
          <p>Kota metropolitan terbesar di <strong>Provinsi Jawa Barat</strong>, sekaligus menjadi ibu
              kota provinsi tersebut.</p>
        </div>
          <nav>
              <ul>
                  <li><a href="#sejarah">Sejarah</a></li>
                  <li><a href="#geografis">Geografis</a></li>
                  <li><a href="#wisata">Wisata</a></li>
              </ul>
          </nav>
      </header> 
  );
}

export default navbar;
