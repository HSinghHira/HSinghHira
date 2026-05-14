deploy:
    git add -A
    git diff --cached --quiet || git commit -m "Building"
    git push -u origin astro-site --force