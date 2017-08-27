#!/bin/bash

#installa i pacchetti tramite npm instal e una volta creata la build, copia la cartella dist all'interno della cartella Back-End

echo "npm install Back End"
cd Back-End
npm install

echo "npm install Front End"
cd ../Front-End
npm install

echo "npm run build"
npm run build

echo "copy dist folder"
cp  -r dist ../Back-End

