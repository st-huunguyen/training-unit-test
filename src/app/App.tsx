import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';

import { RouterOutlet } from '@core/modules/custom-router-dom';
import AppSuspense from './AppSuspense';
import appRoutes from './app.routes';
import appMiddleware from '.././app/app.middleware';
import appReducer from './app.reducers';

const middleware = createSagaMiddleware();
const store = createStore(appReducer, applyMiddleware(middleware, logger));

middleware.run(appMiddleware);

const root = createRoot(document.getElementById('root'));
root.render(
  <Row style={{ marginTop: '40px' }}>
    <Col span={16} offset={4}>
      <Provider store={store}>
        <BrowserRouter>
          <Link to='/users'>Users</Link>
          <AppSuspense fallback={<></>}>
            <RouterOutlet routes={appRoutes} />
          </AppSuspense>
        </BrowserRouter>
      </Provider>
    </Col>
  </Row>
);
