# dm

```docker build -t 127.0.0.1:5000/dm .
docker push 127.0.0.1:5000/dm
docker service create --name dm --label traefik.port=80 --label traefik.domain=marine.ie --network traefik-net 127.0.0.1:5000/dm
```

