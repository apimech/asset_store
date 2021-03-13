$randStr = -join ((65..90) + (97..122) | Get-Random -Count 5 | % {[char]$_})
git add .;git commit -m $randStr;git push heroku master