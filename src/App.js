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
import { UsersPage ,UserNewPage, UserEditPage } from './pages/users';
import { ProductsPage } from './pages/products';

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
          
          <Route path='users' element={<UsersPage />} />
          <Route path='users/new' element={<UserNewPage />} />
          {/* 
              URL Parameter Syntax

              path='path/:parameter'
              path='path/:parameter/path'
              path='path/:parameter1/:parameter2'
              path='path/:parameter1/path/:parameter2'
          */}
          <Route path='users/edit/:id' element={<UserEditPage />} />

          <Route path='products' element={<ProductsPage />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
