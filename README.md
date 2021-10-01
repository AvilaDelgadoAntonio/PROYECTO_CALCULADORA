# Este es el github de **ANTONIO �VILA DELGADO** (2� ASIR)
## En este proyecto usamos 3 estrategias para uso de funciones. La que sigue MVC será la de multiplicar.
Creamos un nuevo proyecto y dentro de esa carpeta:
>npm init --yes
Si queremos instalar el typescript en el propio proyecto y como dependencia de Desarrollo (-D)
>npm install typescript -D
(npx equivale para ejecutar un comando que no está en el sistema y sí en el proyecto)
>npx tsc --init
Se genera el tsconfig.json y en el hacemos las modificaciones de siempre: '"target": "es6",', '"outDir": "./dist",' y en la linea 68 ponemos lo siguiente para que no compile los js que pudiera haber en node_modules):
},
  "exclude": [
    "node_modules"
  ]

En el .gitignore ponemos 
dist
node_modules
pruebas (para no llenar el GitHub con archivos que son solo pruebas)

Creamos src y dentro index.ts, donde irán los programas

Para compilar usamos:
>npx tsc -w
o 
>tsc -w (si tenemos typescript a nivel global)

y creará el dist (el cual de vez en cuando hemos borrado, porque no se actualiza con las ediciones, y acumula código)
Para ejecutar lo que hemos compilado usamos 
>node dist 
o 
>node dist/index

Funciona con node dist porque tenemos la siguiente línea en package.json: "main": "index.js",

Creamos la carpeta view y ponemos en ella archivos 'entradaTeclado' y 'menuPral' (a los cuales invocamos)

Si nuestro proyecto ya existe
>npm install