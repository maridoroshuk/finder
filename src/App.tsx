import React from 'react';
import { HomePage } from 'pages/home/HomePage';

import cn from './App.module.scss';

function App() {
  return (
    <main>
      <div className={cn.section}>
        <HomePage />
      </div>
    </main>
  );
}

export default App;
