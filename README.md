# 姚伊迪个人学术主页

这是一个零构建步骤的静态个人学术主页，面向 GitHub Pages 非本地化部署。推送到 GitHub 后，仓库内置的 Actions 工作流会自动发布网页。

## 文件结构

- `index.html`：页面内容与结构
- `styles.css`：响应式样式
- `script.js`：移动端导航与当前章节高亮
- `assets/yyd-portrait.jpg`：本地头像素材
- `.github/workflows/pages.yml`：GitHub Pages 自动部署工作流
- `.nojekyll`：关闭 Jekyll 处理，确保静态资源按原路径发布

## GitHub Pages 自动部署

1. 在 GitHub 新建一个仓库，例如 `academic-homepage`。
2. 将本目录提交并推送到该仓库的 `main` 分支。
3. 打开仓库 `Settings -> Pages`。
4. 在 `Build and deployment` 中将 `Source` 设为 `GitHub Actions`。
5. 回到 `Actions` 页面等待 `Deploy GitHub Pages` 工作流完成。
6. 发布地址通常为 `https://<你的用户名>.github.io/<仓库名>/`。

如果仓库名使用 `<你的用户名>.github.io`，发布地址会是 `https://<你的用户名>.github.io/`。

## 首次推送参考命令

```bash
git add .
git commit -m "Create academic homepage"
git branch -M main
git remote add origin https://github.com/<你的用户名>/<仓库名>.git
git push -u origin main
```

## 内容来源

文字信息根据华南理工大学教师主页公开资料整理改写；页面未使用学校网站图片素材。
