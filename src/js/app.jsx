import React from 'react';
import { createRoot } from 'react-dom/client';
import Wrap from './Wrap';

const root = createRoot(document.getElementById('app'));

root.render(Wrap());

