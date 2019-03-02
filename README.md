# Presentation

Automatisation de tests à l'aide de CodeceptJs, qui se base sur WebdriverIO et Selenium standalone.

# Mode Dev Desktop



# Mode Docker CI

Pour construire l’image, il suffit alors de se placer dans le répertoire contenant le Dockerfile, puis de lancer :

`$ docker build -t codecept .`
 
Pour vérifier le bon fonctionnement de votre image il vous suffit alors de la lancer :

`$ docker run -tid --privileged --name="codecept" -v $(pwd)/reports:/var/lib/nodejs/codecept/reports -v $(pwd)/output:/var/lib/nodejs/codecept/output codecept`

Vous pouvez maintenant lancer les tests :

`$ docker exec salt-minion salt-call --local test.ping`

Stopper `$ docker stop salt-minion` ou supprimer `$ docker rm -f codecept`

