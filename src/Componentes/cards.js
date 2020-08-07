import React from "react";

class Cards extends React.Component {
  render() {
    return (
      <section>
        <h2> Menú</h2>

        <div class="col mb-4">
          <div className="card">
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgAB
       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"
              class="card-img-top"
              alt="..."
              height="150px"
              width="150px"
            />
            <div className="card-body">
              <p className="card-text">
                Una hamburguesa es un tipo de sándwich hecho a base de carne
                molida aglutinada en forma de filete cocinado a la parrilla o a
                la plancha, aunque también puede freírse u hornearse. Fuera del
                ámbito de habla hispana, es más común encontrar la denominación
                inglesa burger, acortamiento de hamburger.
              </p>
            </div>
          </div>
        </div>

        <div class="col mb-4">
          <div className="card">
            <img
              src="https://imgcdn.larepublica.co/i/1200/2018/10/10213933/pizza1.jpg"
              class="card-img-top"
              alt="..."
              height="150px"
              width="150px"
            />
            <div className="card-body">
              <p className="card-text">
                Pizza es un pan plano horneado, habitualmente cuya base es
                elaborada con harina de trigo, sal, agua y levadura, y
                generalmente cubierto de queso mozzarella, salsa de tomate u
                otros ingredientes locales como son: el salami, tiras de cebolla
                y jamón.
              </p>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div className="card">
            <img
              src="https://www.cocinavital.mx/wp-content/uploads/2019/08/como-hacer-papas-fritas-crujientes-caseras.jpg"
              class="card-img-top"
              alt="..."
              height="150px"
              width="150px"
            />
            <div className="card-body">
              <p className="card-text">
                Las papas fritas o patatas fritas, también conocidas como papas
                a la francesa o patatas a la francesa, son las patatas que se
                preparan cortándose en rodajas o en forma de bastones y
                friéndolas en aceite caliente hasta que queden doradas,
                retirándolas del aceite y luego sazonándolas con sal.
              </p>
            </div>
          </div>
        </div>

        <div className="col mb-4">
          <div className="card">
            <img
              src="https://www.dondeir.com/wp-content/uploads/2018/04/los-10-mejores-hot-dogs-cdmx-1.jpg"
              class="card-img-top"
              alt="..."
              height="150px"
              width="150px"
            />
            <div className="card-body">
              <p className="card-text">
                El perrito caliente (del inglés hot dog, ‘perro caliente’) es un
                alimento en forma de bocadillo que se genera con la combinación
                de una salchicha del tipo salchicha de Frankfurt (frankfurter) o
                vienesa (wiener) hervida o frita servida en un pan con forma
                alargada que suele acompañarse con algún aderezo, como salsa de
                tomate, mostaza y cebolla..
              </p>
            </div>
          </div>
        </div>

        <div class="col mb-4">
          <div className="card">
            <img
              src="https://www.superama.com.mx/views/micrositio/recetas/images/masbuscadas/lasagna/Web_fotoreceta.jpg"
              class="card-img-top"
              alt="..."
              height="150px"
              width="150px"
            />
            <div className="card-body">
              <p className="card-text">
                a lasaña (italiano: lasagne) es un tipo de pasta que se sirve en
                láminas (para denominarse lasaña ha de llevar como mínimo cuatro
                capas de pasta y relleno, además de denominarse así también a un
                plato que tiene pasta en láminas intercaladas con carne (ragú o
                salsa boloñesa) y bechamel llamado lasaña al horno (Lasagna al
                forno). Se trata de un plato de origen italiano.
              </p>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div className="card">
            <img
              src="https://www.porcicarnes.com/wp-content/uploads/2019/01/derivados-de-cerdo-chuzo.jpg"
              class="card-img-top"
              alt="..."
              height="150px"
              width="150px"
            />
            <div className="card-body">
              <p className="card-text">
                Los pinchos son una comida práctica y fácil de hacer en
                cualquier momento. En Puerto Rico los puedes encontrar a la
                venta en cualquier kioskito en la playa, en las carreteras o en
                las fiestas patronales. Son fáciles de hacer en casa y una buena
                opción para variar el menú.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Cards;
