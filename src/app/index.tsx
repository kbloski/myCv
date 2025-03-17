import RouterAppProvider from "../router";
import Providers from "./providers";

function App() {
    return (
        <Providers>
            <RouterAppProvider />
        </Providers>
    );
}

export default App;
