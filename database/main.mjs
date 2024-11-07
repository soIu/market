import path from 'node:path';
import fs from 'node:fs';
import { Worker } from "worker_threads";

import * as Comlink from 'comlink';
import nodeEndpoint from 'comlink/dist/esm/node-adapter.mjs';

//const dirname = path.dirname(require.resolve('./worker.js'));

const dirname = typeof __dirname === 'undefined' ? path.dirname(require.resolve('./worker.js')) : eval('__dirname');

export function createLocalWorker(table) {
  if (!(fs.existsSync(path.join(dirname, './data/')))) fs.mkdirSync(path.join(dirname, './data/'));
  const worker = Comlink.wrap(nodeEndpoint(new Worker(path.join(dirname, './worker.js'))))
  worker.init('pglite', path.join(dirname, './data/' + table), table);
  return worker;
};
