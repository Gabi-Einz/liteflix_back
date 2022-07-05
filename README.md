## Requisitos previos
  Tener instalado: 
    npm, node, docker, docker-compose.
## Levantar servidor localmente
  1) Levantamos contenedores de node y mysql --> docker-compose up
  
  2) Ejecutamos migrations -->  docker exec liteflix-node npm run typeorm:local migration:run
  
  Nota: Para el funcionamiento aplicacion web, se debe levantar tanto front (liteflix_front) como back (liteflix_back).
    

## Crear migration:
	docker exec liteflix-node npm run typeorm:local migration:create -- -n "MigrationNameInCamelCase"

	docker exec liteflix-node npm run typeorm:local migration:create -n "asd"

## Ejecutar migration:
	docker exec liteflix-node npm run typeorm:local migration:run
	
## Ejecutar logs:
	docker exec liteflix-node cat /home/node/.npm/_logs/2022-06-26T16_11_36_089Z-debug.log

## Generar Entities:
  docker exec liteflix-node\
  npx typeorm-model-generator\
  -h liteflix-mysql\
  -p 3306\
  -d liteflix_db\
  -u root\
  -x root\
  -e mysql\
  -o "./apps/src/Models/Entities"
