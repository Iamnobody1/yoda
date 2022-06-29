import { url } from 'inspector';
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Poring from './poring';
import { NextQueryParamProvider } from 'next-query-params';

function Index() {
  return (
    <NextQueryParamProvider>
      <Poring />
    </NextQueryParamProvider>
  );
}

export default Index;
