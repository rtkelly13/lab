import { copyFileSync, existsSync } from 'node:fs';

if (!existsSync('.env')) {
  copyFileSync('.env.example', '.env');
  console.log(
    'created .env from .env.example (edit it to add your op:// refs)',
  );
}
