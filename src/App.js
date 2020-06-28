import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <body>
      <section>
        <div>

        </div>
        <p>
          BUENOMOTOR, S.L.
        </p><br/>
        <p>
          Su taller de confianaza 
        </p>
        <button>Solicite su cita</button>
      </section>
      <div id="header">
        <nav> 
          <ul class="nav">
            <li><a href="">Inicio</a></li>
            <li><a href="">Servicios</a>
              <ul>
                <li><a href="">Submenu1</a></li>
                <li><a href="">Submenu2</a></li>
                <li><a href="">Submenu3</a></li>
                <li><a href="">Submenu4</a>
                  <ul>
                    <li><a href="">Submenu1</a></li>
                    <li><a href="">Submenu2</a></li>
                    <li><a href="">Submenu3</a></li>
                    <li><a href="">Submenu4</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a href="">Acerca de</a>
              <ul>
                <li><a href="">Submenu1</a></li>
                <li><a href="">Submenu2</a></li>
                <li><a href="">Submenu3</a></li>
                <li><a href="">Submenu4</a></li>
              </ul>
            </li>
            <li><a href="">Contacto</a></li>
          </ul>
        </nav>
		  </div>
      <section class="imagen">
        <p>BUENOMOTOR</p>
        <br></br>
        <p>Su taller de confianza en colsada</p>
        <br></br>
        <button>Peticion de Cita</button>
      </section>
      <section class="parrafo">
        <p>SOBRE NOSOTROS</p>
        <p>
          BUENOMOTOR S.L., comienza su actividad en el año 1985 por tanto. Desde el comienzo, dotamos nuestras instalaciones con los equipos más modernos de la época. Con el paso del tiempo, hemos ido ampliando nuestras instalaciones en el mismo lugar de origen, hasta conformar 750 m. y renovando los equipos. En la actualidad, nuestra plantilla está formada por 10 profesionales y algunos de ellos están con nosotros desde el comienzo de nuestra actividad.
        </p>
        <br></br>
        <p>
        En el año 1993 pusimos en marcha nuestro servicio estrella, “coche de sustitución gratis”, cosa que nos hace pioneros en este servicio de cortesía, dentro de nuestro sector. Usted, simplemente, y siempre con cita previa, cuando deja su vehículo en nuestro taller para cualquier reparación de mantenimiento, chapa-pintura, etc., se lleva en ese momento un coche de sustitución completamente gratis, mientras nosotros cuidamos del suyo.
        </p>
      </section>
      <section class="cuadro">
        <div class="rojo">
          <p>TALLER <br/>DISTINGUIDO</p>
          <p>CLUB MAPFRE</p>
        </div>
        <div class="texto">
          <p>Concertados con TODAS LAS COMPAÑÍAS DE SEGUROS</p><br/>
          <p>Disponemos de una amplio horario para su mayor comodidad:</p><br/>
          <p>De lunes a viernes de 7.00 a 19.00</p><br/>
          <p>Sábados de 09.00 a 13.000</p><br/>
          <p>Domingos cerrado</p><br/>
          <p>No dude en dejarnos en confianza su vehículo de cualquier marca.</p>
        </div>
      </section>
      <section>
        <div>

        </div>
        <div>
          BUENOMOTOR, SL<br/>
          Su taller de confianza
        </div>
        <div>
          CONTACTO 91 669 12 00
        </div>
      </section>
      <section>
        <div>
          <p>HORARIO</p><br/>
          <p>De lunes a viernes, de 7:00 a 19:00</p><br/>
          <p>Sábados de 09.00 a 13.00</p><br/>
          <p>91 669 12 00</p><br/>
          <p>buenomotor@hotmail.com</p><br/>
          <p>Tierra de Barros, parcela 3, nave 38
          28823 Coslada (Madrid)</p><br/>
        </div>
        <div>
          <p>ENLACES DE INTERES</p><br/>
          <p>Sobre nosostros</p><br/>
          <p>Vehiculo de cortesia</p><br/>
          <p>Promociones</p><br/>
          <p>Contacto</p><br/>
        </div>
        <div>
          <p>Localizacion</p><br/>
          
        </div>
        <div>
          <p>NUESTRO TALLER</p><br/>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
      </body>
    </div>
  );
}

export default App;
