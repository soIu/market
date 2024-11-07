import { Suspense } from 'react';
import { DefaultServerComponent } from './server';

export default function Root(props) {
  return (
    <Suspense>{DefaultServerComponent()}</Suspense>
  );
}
