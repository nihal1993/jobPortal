# jobPortal
Its is a job Portal 
Its is a job Portal 

steps .

1. take a pull and setup .env according to your local db
   -- mine env --
   APP_NAME=Laravel
APP_ENV=local
APP_KEY=base64:GFNkE4Oivx6mJAvQvYycgIzi8fny/z15Vhh/D9S/SHg=
APP_DEBUG=true
APP_LOG_LEVEL=debug
APP_URL=http://localhost

DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=jobportal
DB_USERNAME=root
DB_PASSWORD=password

BROADCAST_DRIVER=log
CACHE_DRIVER=file
SESSION_DRIVER=file
SESSION_LIFETIME=120
QUEUE_DRIVER=sync

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_DRIVER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null

PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
PUSHER_APP_CLUSTER=mt1



2. run the following command 
    php artisan migrate
    php artisan serve -- in different tab
    npm install
    npm run watch 


    
