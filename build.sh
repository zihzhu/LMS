#!/bin/bash
cd ~/gitrepo/LMS
isUpdate=$(git pull)
echo $isUpdate
if [ $isUpdatex=="Already up-to-date."x ]; then
    echo "up-to-date"
else
    ng build
    cp -r ~/gitrepo/LMS/* /var/www/html/
    # echo "up-to-date"
fi
