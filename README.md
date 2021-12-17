# Простое развертывание сборки проекта на удаленном сервере
Это пустой Webpack проект, который демонстрирует процесс CI/CD с использованием сервиса Git Actions.

![alt-текст](http://arthurburavljov.ru/lab/git-images/remote-deploy.jpg "Git Actions Example")

## Подготовка репозитория
После клонирования репозитория в Settings -> Secrets создайте два секрета:
- "IP": должен содержать IP-адрес удаленного веб-сервера, где будет производится deploy;
- "KEY": приватный ключ для соединения по SSH без пароля (на веб-сервере должен быть предварительно установлен публичный ключ из пары [подробнее здесь](https://guides.hexlet.io/ssh/#%D0%B7%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B0-%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D1%87%D0%BD%D0%BE%D0%B3%D0%BE-%D0%BA%D0%BB%D1%8E%D1%87%D0%B0-%D0%BD%D0%B0-%D1%81%D0%B5%D1%80%D0%B2%D0%B5%D1%80));

## Принцип работы
Файл с конфигурацией workflow линтинга, теста, сборк и деплоя проекта расположен здесь: .github/workflows/deploy-project.yml. В некторых шагах (Install dependencies, Linting scripts и т.д.) используется команда make. Конфигурация этих команд описана в /Makefile.
Workflow запускается при каждом push'е в ветку main. Процесс работы workflow можно наблюдать во вкладке Actions ([Читать подробнее о Git Actions](https://docs.github.com/en/actions/quickstart)).
