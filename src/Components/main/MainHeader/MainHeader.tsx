import React from 'react'

export default function MainHeader(){

    return (
        <header>
			<div className="container">
				<div className="row">
					<div className="col-sm-6 jp_fifty">
						<h1><a href="/lab" className="juana">LAB Justicia</a></h1>
					</div>
					<div className="col-sm-5 jp_thirty">

						<h2 className="right"><a className="mexicoevalua" href="https://www.mexicoevalua.org/">México Evalúa</a>
						<a className="proyecto_justicia" href="http://proyectojusticia.org/">Proyecto Justicia</a></h2>

					</div>
				</div>
			</div>
		</header>
    );
}