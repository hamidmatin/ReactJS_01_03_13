import { ReactModuleIntro } from './tutorials/react-module/react-module-intro';
import { ReactComponentIntro } from './tutorials/react-component/react-component-intro';
import { MainLayout } from './layout/main-layout';

function App() {
  return (
    <MainLayout >
      <ReactModuleIntro />
      <hr />
      <ReactComponentIntro />
    </MainLayout>
  );
}

export default App;
