import "./index.css";

import "primeicons/primeicons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "devicon/devicon.min.css";

import {
    RouterAppProvider
} from "./router";
import Providers from "./providers";

function App() {
    return (
        <Providers>
            <RouterAppProvider />
        </Providers>
    );
}

export default App;
