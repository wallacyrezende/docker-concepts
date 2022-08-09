# Estudando Docker
Este projeto foi desenvolvido com o intuito de manipular imagens docker, utilizar o Docker Engine

## Comando executados durante a live

- docker ps
- docker image ls
- docker rm \<imageID>
- docker rmi \<imageID> -f
- docker run nginx:1.19.10-alpine
- docker run -d nginx:1.19.10-alpine
- docker logs \<contianerID>
- docker stop \<contianerID>
- docker run -d -p 8080:80 nginx:1.19.10-alpine
- docker run -d -p 8080:80 -v $(pwd):/usr/share/nginx/html nginx:1.19.10-alpine
- docker exec -it \<imageID> /bin/sh
- docker build -t my-image-node . (criar imagem)
- docker build -t my-image-node-prod -f Dockerfile.prod .
- docker push wallacyrezende/my-image-node-prod (subir imagem no docker hub)
- docker run -p 8080:80 wallacyrezende/my-image-node-prod
- docker save (gera um snapshot do docker)

### Links ###
**Aula 1**: [Configuração do WSDL2 no sistema operacional Windows](https://github.com/codeedu/wsl2-docker-quickstart)

**Aula 2**: [Criando uma aplicação com Docker até o Deploy](https://www.youtube.com/watch?v=F_pgDkErFIk)
