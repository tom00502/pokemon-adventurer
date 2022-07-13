set -e
npm run build
cd dist
cp ./index.html ./404.html
git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/tom00502/pokemon-adventurer.git master:gh-pages

cd -