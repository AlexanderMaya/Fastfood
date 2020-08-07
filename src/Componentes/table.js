import React from "react";

class Table extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="row">
            <div className="col-lg-8">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Ciudad</th>
                    <th scope="col">Telefono</th>
                    <th scope="col">Dirección</th>
                    <th scope="col">Horarios de atención</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Santander</th>
                    <td>300 7092930</td>
                    <td>Cra 46 A #48-19</td>
                    <td>Todos los dias de 4:00pm-12:00am</td>
                  </tr>
                  <tr>
                    <th scope="row">Medellín</th>
                    <td>3013059123</td>
                    <td>Cra 78 A #84-16</td>
                    <td>Todos los dias de 2:00pm-12:00am</td>
                  </tr>
                  <tr>
                    <th scope="row">Boyaca</th>
                    <td>3005912207</td>
                    <td>Cra 92 A #45-10</td>
                    <td>Todos los dias de 1:00pm-11:00pm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Table;
