import { ThemeProvider } from 'next-themes';

import '../styles/globals.css';

const App = ({ Component, pageProps }) => (
  <ThemeProvider attribute="class">
    <div className="dark:bg-nft-dark bg-white min-h-screen">
      <h1>NAVBAR</h1>
      <Component {...pageProps} />;
      <h1>NAVBAR</h1>
    </div>
  </ThemeProvider>
);
export default App;