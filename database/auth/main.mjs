import path from 'node:path';
import fs from 'node:fs';
import { Worker } from "worker_threads";

import * as Comlink from 'comlink';
import nodeEndpoint from 'comlink/dist/esm/node-adapter.mjs';

const dirname = typeof __dirname === 'undefined' ? path.dirname(require.resolve('./worker.js')) : path.join(eval('__dirname'), '../database/auth');

export function createLocalAuthWorker(table) {
  if (!(fs.existsSync(path.join(dirname, '../data/')))) fs.mkdirSync(path.join(dirname, '../data/'));
  const worker = Comlink.wrap(nodeEndpoint(new Worker(path.join(dirname, './worker.js'))))
  worker.init('pglite', path.join(dirname, '../data/' + table), table);
  return worker;
};
