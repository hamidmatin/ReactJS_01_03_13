import { ReactModuleIntro } from './tutorials/react-module/react-module-intro';
import { StateAndEventsInCC } from './tutorials/state-events-cc';
import { MainLayout } from './layout/main-layout';

import './App.css';
import ClassComponentLifecycle from './tutorials/class-component-lifecycle/class-component-lifecycle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UsingFunctionComponent } from './tutorials/react-component/using-function-component';
import { UsingClassComponent } from './tutorials/react-component/using-class-component';
import { HomePage } from './pages/home/home-page';
import { StateInFC } from './tutorials/state-in-fc';
import { TutorialsPage } from './pages/tutorials/tutorials-page';
import { TutorialHome } from './tutorials/home/tutorial-home';
import { UseCssModule } from './tutorials/css-module';
import { PageNotFound } from './pages/404/page-not-found';
import { CalculatorPage } from './pages/calculator';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='tutorials' element={<TutorialsPage />}>
            <Route index element={<TutorialHome />} />
            <Route path='module-intro' element={<ReactModuleIntro />} />
            <Route path='fc-component-intro' element={<UsingFunctionComponent />} />
            <Route path='cc-component-intro' element={<UsingClassComponent />} />
            <Route path='state-events' element={<StateAndEventsInCC />} />
            <Route path='cc-lifecycle' element={<ClassComponentLifecycle />} />
            <Route path='fc-state-lifecycle' element={<StateInFC />} />
            <Route path='css-module' element={<UseCssModule />} />
          </Route>

          <Route path='calculator' element={<CalculatorPage />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
