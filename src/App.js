import GalleryNavigation from "./components/GalleryNavigation";

import { Route, Switch } from "react-router-dom"
import GalleryView from "./components/GalleryView";
import Home from "./components/Home";

function App({ harvardArt }) {
  return (
    <div className="page-wrapper">
      {/* <h1>Hello from App</h1> */}
      <GalleryNavigation galleries={harvardArt.records} />
      <Switch>

        <Route path={`/galleries/:galleryId`}>
          <GalleryView galleries={harvardArt.records} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route>
          <h2>Page Not Found</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
