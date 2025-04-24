const { execSync } = require('child_process');

const func = process.argv[2];
const data = process.argv[3] || '{}';

if (!func) {
  console.error('Usage: npm run invoke <functionName> <data>');
  process.exit(1);
}

execSync(`npx serverless invoke local --function ${func} --data ${data}`, {
  stdio: 'inherit'
});
