import RouterAppProvider from "./router";
import Providers from "./app/providers";

function App() {
    return (
        <Providers>
            <RouterAppProvider />
        </Providers>
    );
}

export default App;
