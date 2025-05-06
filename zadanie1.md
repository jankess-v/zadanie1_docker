3.a) zbudowanie obrazu kontenera
docker build -t final_build .

3.b) uruchomienie kontenera na podstawie zbudowanego obrazu
docker run -d -p 3000:3000 --name app final_build

3.c) student@localhost:~/Pulpit/pawcho_zad1> docker run -p 3000:3000 --name app final_build 
Serwer uruchomiono - 6-5-2025 8:49
Jakub Jankowski
Port kontenera: 3000

Dane są logowane zarówno przy uruchamianiu kontenera i w konsoli przeglądarki
3.d) docker image inspect final_build - w linijce "Layers" {...}:
lub docker history final_build

