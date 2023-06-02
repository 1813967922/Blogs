# 忽略错误
set -e

# 构建
npm run docs:build

# 进入待发布的目录
cd docs/.vitepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果部署到 https://1813967922.github.io
git push -f git@github.com:1813967922/Blogs.git master:gh-pages
cd -

# 权限问题
# ssh-keygen -t rsa -b 4096 -C "github账号"
# id_rsa.pub里的内容复制到github

# git init
# git add .
# git commit -m "deploy"
# git branch -M master
# git remote add origin https://github.com/1813967922/Blogs.git
# git push -u origin master