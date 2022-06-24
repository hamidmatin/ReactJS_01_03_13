import { ReactModuleIntro } from './tutorials/react-module/react-module-intro';
import { ReactComponentIntro } from './tutorials/react-component/react-component-intro';
import { StateAndEventsInCC } from './tutorials/state-events-cc';
import { MainLayout } from './layout/main-layout';

import './App.css';
import ClassComponentLifecycle from './tutorials/class-component-lifecycle/class-component-lifecycle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UsingFunctionComponent } from './tutorials/react-component/using-function-component';
import { UsingClassComponent } from './tutorials/react-component/using-class-component';
import { HomePage } from './pages/home/home-page';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='module-intro' element={<ReactModuleIntro />}/>
          <Route path='fc-component-intro' element={<UsingFunctionComponent />}/>
          <Route path='cc-component-intro' element={<UsingClassComponent />}/>
          <Route path='state-events' element={<StateAndEventsInCC />} />
          <Route path='cc-lifecycle' element={<ClassComponentLifecycle />} />
        </Routes>
        {/* <ReactModuleIntro /> */}
        {/* <ReactComponentIntro /> */}
        {/* <StateAndEventsInCC /> */}
        {/* <ClassComponentLifecycle /> */}
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
