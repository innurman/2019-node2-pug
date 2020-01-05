# SQL-CRUID
## Create
~~~sql
/*
CREATE TABLE `` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(255) NULL DEFAULT NULL,
	`writer` VARCHAR(255) NULL DEFAULT NULL,
	`wdate` DATETIME NULL,
	`rnum` INT NULL DEFAULT '0',
	PRIMARY KEY (`id`)
)
*/

-- INSERT INTO 테이블명 (필드명1, 필드명2...) VALUES (값1, 값2...)
-- INSERT INTO 테이블명 SET 필드명1='값1', 필드명2='값2'
INSERT INTO board (title, writer, wdate) VALUES ('제목입니다.', '관리자', '2020-01-05 14:35:00');
INSERT INTO board SET title='제목입니다.', writer='관리자', wdate='2020-01-05 14:35:00';
~~~