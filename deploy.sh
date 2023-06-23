#!/bin/bash

BASEDIR="$(cd "$(dirname "$0")" && pwd)"
deployProject="project-viewer"

if [ -z $deployProject ]; then
  echo "No active web app deployment project has been set."
else
  echo "Deploying to $deployProject"
  cd $BASEDIR/src
  DENO_DEPLOY_TOKEN=$DENO_DEPLOY_TOKEN deployctl deploy --project $deployProject --prod serve-deploy.ts
fi
