import "./App.css";
import { colorsBootstrapMinCss, colorsDatatablesBundleCss, colorsDefaultCss } from "./utils/projectColors";
import Paleta from "./components/Paleta";

function App() {
  return (
    <>
      <header className="header">
        <h1>Colores por archivo CSS</h1>
      </header>
      <main>
        <section className="project-section">
          <h2>Progreso</h2>
          <Paleta fileCssName="bootstrap.min.css" colors={colorsBootstrapMinCss} />
          <Paleta fileCssName="datatables.bundle.css" colors={colorsDatatablesBundleCss} />
          <Paleta fileCssName="default-css.css" colors={colorsDefaultCss} />
        </section>
        <section className="project-section">
          <h2>TSF</h2>
        </section>
      </main>
    </>
  );
}

export default App;
