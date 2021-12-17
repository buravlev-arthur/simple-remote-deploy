install:
	npm ci

test:
	npm run test

lint:
	npx eslint ./src/**/*.js && npx eslint ./*.js

stylelint:
	npx stylelint "**/*.css"

build:
	npm run build

deploy:
	cd ./dist && rsync -r --archive --compress --delete . bao@194.67.104.65:/home/bao/remote-deploy/