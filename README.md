# Docker_project
Docker_project

## Lien vers l'archive .tar

Fichier a télécharger | MD5 (projet_de_boukou.tar)
--- | ---
[Lien vers l'archive](https://drive.google.com/drive/folders/1PJY9gA63QCF0v1kdYFs9vX2_vzJbdH8v?usp=sharing) | 2b20c1daef2681e30801c57e989e901f

<!--[Lien vers l'archive](https://drive.google.com/drive/folders/1PJY9gA63QCF0v1kdYFs9vX2_vzJbdH8v?usp=sharing)-->

## Structure
---
```
MEAN-Stack-CRUD-Operations/
|     ├── AngularApp/
|     |     ├── ....
|     |     └── Dockerfile
|     ├── NodeJS/
|     |     ├── ....
|     |     └── Dockerfile
|     ├── docker-compose.yml
|     └── README.md
└── README.md
```

## Structure
> Recupere l'archive .tar [ICI](https://drive.google.com/drive/folders/1PJY9gA63QCF0v1kdYFs9vX2_vzJbdH8v?usp=sharing) si c'est pas déjà fait
> ensuite avec le terminal se rendre dans le même repertoire que l'archive et faire :
```
$ docker load < projet_de_boukou.tar
```
> pour afficher les images chargé
```
$ docker images
```
> resultat de docker images:
```
REPOSITORY                           TAG                 IMAGE ID            CREATED             SIZE
mean-stack-crud-operations_express   latest              cb3b0746cdfa        4 hours ago         914MB
mean-stack-crud-operations_angular   latest              77f777738eda        4 hours ago         1.36GB
mongo                                latest              4a3b93a299a7        13 days ago         394MB
```
> pour RUN le projet faire :
```
$ cd MEAN-Stack-CRUD-Operations/
$ docker-compose up
```

## Lien pour afficher l'application web
> dans un navigateur
```
http://localhost:5555/
```

---
## Membre 
1. **Askia** Mohamed
2. **BOUKOU** Grace
