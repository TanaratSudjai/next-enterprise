import { FC } from 'react';
import Rescoures from './Resources/Rescoures';
import Alone from './Resources/Alone';
import Service from './Resources/Service';
import CardResoult from './Resources/CardResoult';

function Content() {
  return (
    <div className="mt-[-150px] bg-white">
      <Rescoures />
      <Alone />
      <Service />
      <CardResoult />
    </div>
  )
}

export default Content
