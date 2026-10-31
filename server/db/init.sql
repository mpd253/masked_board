-- MySQL root 계정으로 처음 세팅할 때 한 번만 실행한다.
-- 실행 전에 'password'를 실제 비밀번호로 바꾸고, server/.env의 DB_PASSWORD와 맞춘다.
-- 실행 후에는 다시 'password'로 되돌린다. 이 파일은 Git에 올라간다.
CREATE DATABASE IF NOT EXISTS masked_board
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

CREATE USER IF NOT EXISTS 'masked_board'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON masked_board.* TO 'masked_board'@'localhost';
