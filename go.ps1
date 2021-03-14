$randStr = -join ((65..90) + (97..122) | Get-Random -Count 5 | % {[char]$_})
git add .;git commit -m "abcd";git push -u origin main;git status