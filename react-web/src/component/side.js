import '../css/side.css'
import bandung from '../images/Bandung_coa.png'

function side() {
    return (
        <aside>
          <article class="card">
              <h2>Kota Bandung</h2>
              <p>Kota Kembang Paris van Java</p>
              <figure class="profile">
                <img src={bandung} alt=''/>
                <figcaption>Lambang</figcaption>
              </figure>
          </article>

            <section>
                <h3>Informasi Lainnya</h3>
                <table>
                  <tr>
                    <th>Negara</th>
                    <td>Indonesia</td>
                  </tr>
                  <tr>
                    <th>Hari jadi</th>
                    <td>25 September 1810</td>
                  </tr>
                  <tr>
                    <th>Luas Total</th>
                    <td>167.67 km<sup>2</sup></td>
                  </tr>
                  <tr>
                    <th>Bahasa Daerah</th>
                    <td>Sunda</td>
                  </tr>
                  <tr>
                    <th>Kode Telepon</th>
                    <td>+62 22</td>
                  </tr>
                </table>
              </section>
        </aside> 
    )
}

export default side