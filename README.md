# Todocker2

## Déploiement

Création de l'image contenant la build chain

```bash
docker build -t afelio/nx-build .
```

Créer le volume pour la db

```bash
docker volume create todocker
```

Lancer les applicatifs

```bash
docker-compose up
```



