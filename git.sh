a= echo "Run git status"
read $a
git status
ab= echo "Run git add -A"
read $ab
git add -A
b= echo "Run git commit: message: "
read $b
echo message is $b
git commit -m $b
c= echo "Run git push"
read $c
git push
d= echo "Exit"
read $d