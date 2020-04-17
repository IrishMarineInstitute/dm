# dm

```
docker build -t 127.0.0.1:5000/dm .
docker push 127.0.0.1:5000/dm
docker service create --name dm --label traefik.port=80 --label traefik.domain=marine.ie --network traefik-net 127.0.0.1:5000/dm
```

To update this service after changing files in html floder
```
docker build -t 127.0.0.1:5000/dm .
docker push 127.0.0.1:5000/dm
x=dm;for s in 2 3 4 5 6; do ssh dmdock0$s docker pull 127.0.0.1:5000/$x:latest ; done
service=dm; docker service update --force --image 127.0.0.1:5000/$service:latest $service
```

