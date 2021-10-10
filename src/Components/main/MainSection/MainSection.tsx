import React from 'react';


export default function MainSection() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="jp_main_title">LAB <span>Justicia</span></h1>
            <h3 className="jp_subtitle">Herramienta colaborativa de <strong>datos</strong></h3>
            <p><strong>LAB Justicia</strong> es una <strong>herramienta colaborativa de datos</strong> que permite comparar, tabular, graficar y descargar datos públicos y datos generados por organizaciones dedicadas al análisis de la justicia penal en México. Podrás encontrar los resultados del Ranking Nacional y del Índice de Impunidad disponibles en el reporte <a href="https://www.mexicoevalua.org/hallazgos2017/">Hallazgos</a> (elaborado anualmente por <a href="https://www.mexicoevalua.org/"><strong>México Evalúa</strong></a>), así como los microdatos contenidos en los <strong>Censos Nacionales de Procuración e Impartición de Justicia</strong> elaborados por el <a href="https://www.inegi.org.mx/">INEGI</a>. </p>
            <p>Esperamos que esta herramienta sea útil para encontrar más y mejores respuestas a los problemas que enfrenta la justicia en México. Ayúdanos a encontrarlas, ¡y explora los datos!</p>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <div className="me_divider"></div>
            <h2 className="jp_subtitle">Explora los datos</h2>
          </div>
          <div className="col-sm-4 jp_card_link">

            <span className="jp_i_home ranking"></span>
            <span>Evolución del sistema de justicia penal</span>

          </div>
          <div className="col-sm-4 jp_card_link">

            <span className="jp_i_home estados"></span>
            <span>Información estatal</span>

          </div>
          <div className="col-sm-4 jp_card_link">

            <span className="jp_i_home datos"></span>
            <span>Configura tus datos</span>

          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <div className="me_divider"></div>
            <h2 className="jp_subtitle">Utiliza los datos</h2>
          </div>
          <div className="col-sm-4 col-sm-offset-4">

            <span className="jp_title bottom_link">
              Descarga los datos abiertos
            </span>

          </div>
        </div>

      </div>

    </div >
  );
}
