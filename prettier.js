#!/usr/bin/env node

const spawn = require('cross-spawn');
const path = require('path');
const yargs = require('yargs');
const { env } = require('yargs');

const argv = yargs
    .option('write', {
      boolean: true,
      describe: 'Rewrite processed files in place',
    })
    .parse();

const operation = argv.write ? '--write' : '--list-different';

(async () => {
  const rootDir = __dirname;
  // Determine wether this script was called from the root
  const relativePackageDir = path.relative(rootDir, process.env.PWD);
  await new Promise(() => {
    const args = [
      '--no-install',
      'prettier',
      operation,
      `${relativePackageDir ? `${relativePackageDir}/` : ''}**/*`,
    ];
    console.log(`Executing prettier command: npx ${args.join(' ')}`);
    spawn('npx', args, {
      stdio: 'inherit',
      cwd: rootDir,
    }).on('exit', (code) => {
      process.exit(code);
    });
  });
})();