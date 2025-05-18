# SmartAIFridge
Hướng dẫn cài đặt:
- Clone/Pull git về
- Mở cmd trong folder
- Chạy lệnh ```cd frontend``` rồi ```npm install```
- Mở cmd khác, chạy lệnh ```cd backend``` rồi ```npm install```
- Trong cmd backend, chạy lệnh ```node server.js``` để chạy server backend trước (nhớ cài Nodejs)
- Trong cmd frontend, chạy lệnh ```npm run dev``` để chạy server frontend (nó sẽ hiện 1 cái link trong cmd, ctrl + click vào để đi tới web)

Hướng dẫn push code:
- Chạy lệnh ```git checkout -b <tên branch>``` để tạo 1 branch mới
- Chạy lần lượt các lệnh sau:
    ```git add .```
    ```git commit -m "<commit message here>"```
    ```git push origin <tên branch mới>```
- Lên github và tạo pull request trong branch mới
- Chờ lên github và mọi người cùng nhau review code mới, sau đó **Squash and merge** vào main. 
