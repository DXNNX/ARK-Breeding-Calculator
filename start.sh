sudo docker restart
sudo docker build . -t breeding
sudo docker run -it -p 80:3000 breeding