import "./App.css";
import {
  colorsBootstrapMinCss,
  colorsDatatablesBundleCss,
  colorsDefaultCss,
  colorsFontAwesomeMinCss,
  colorsFontsCss,
  colorsMetisMenuCss,
  colorsOwnCarouselMinCss,
  colorsPluginsBundleCss,
  colorsResponsiveCss,
  colorsSlickNavMinCss,
  colorsStyleBundleCss,
  colorsStylesCss,
  colorsThemifyIconsCss,
  colorsTypographyCss
} from "./utils/projectColorsProgreso";
import Paleta from "./components/Paleta";
import {
  colorsAnimateTSF,
  colorsDemoTSF,
  colorsMainTSF,
  colorsNgxDatatableCustomStylesTSF,
  colorsStylesTSF,
  colorsUtilTSF
} from "./utils/projectColorsTSF";

function App() {
  return (
    <>
      <header className="header">
        <h1>Colores por archivo CSS</h1>
      </header>
      <main>
        <section className="project-section">
          <h2>Proyecto Progreso</h2>
          <Paleta
            cssFileName="bootstrap.min.css"
            colors={colorsBootstrapMinCss}
          />
          <Paleta
            cssFileName="datatables.bundle.css"
            colors={colorsDatatablesBundleCss}
          />
          <Paleta cssFileName="default-css.css" colors={colorsDefaultCss} />
          <Paleta
            cssFileName="font-awesome.min.css"
            colors={colorsFontAwesomeMinCss}
          />
          <Paleta cssFileName="fonts.css" colors={colorsFontsCss} />
          <Paleta cssFileName="metisMenu.css" colors={colorsMetisMenuCss} />
          <Paleta
            cssFileName="own.carousel.min.css"
            colors={colorsOwnCarouselMinCss}
          />
          <Paleta
            cssFileName="plugins.bundle.css"
            colors={colorsPluginsBundleCss}
          />
          <Paleta cssFileName="responsive.css" colors={colorsResponsiveCss} />
          <Paleta
            cssFileName="slicknav.min.css"
            colors={colorsSlickNavMinCss}
          />
          <Paleta
            cssFileName="style.bundle.css"
            colors={colorsStyleBundleCss}
          />
          <Paleta cssFileName="styles.css" colors={colorsStylesCss} />
          <Paleta
            cssFileName="themify-icons.css"
            colors={colorsThemifyIconsCss}
          />
          <Paleta cssFileName="typography.css" colors={colorsTypographyCss} />
        </section>
        <section className="project-section">
          <h2>Proyecto TSF</h2>
          <Paleta cssFileName="animate.css" colors={colorsAnimateTSF} />
          <Paleta cssFileName="demo.css" colors={colorsDemoTSF} />
          <Paleta cssFileName="main.css" colors={colorsMainTSF} />
          <Paleta
            cssFileName="ngx-datatable-custom-styles.css"
            colors={colorsNgxDatatableCustomStylesTSF}
          />
          <Paleta cssFileName="util.css" colors={colorsUtilTSF} />
          <Paleta cssFileName="styles.css" colors={colorsStylesTSF} />
        </section>
      </main>
    </>
  );
}

export default App;
