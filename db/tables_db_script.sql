/**
 *
 * @author Geppetto Generated Code</br>
 * Date Created: </br>
 * @since  </br>
   build:   </p>
 *
 * code was generated by the Geppetto System </br>
 * Gepppetto system Copyright - Geppetto LLC </br>
 * The generated code is free to use by anyone</p>
 *
 *
 *
*/


USE testing;

CREATE TABLE Noun(
id bigint(19) NOT NULL auto_increment,
created_date datetime NOT NULL DEFAULT NOW(),
created_by bigint(19) NOT NULL DEFAULT 0,
updated_date datetime NOT NULL DEFAULT NOW(),
updated_by bigint(19) NOT NULL DEFAULT 0,
name varchar(255),
PRIMARY KEY (id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
;

CREATE TABLE `Users` ( `id` bigint(20) NOT NULL AUTO_INCREMENT, `firstname` varchar(255) DEFAULT NULL, `lastname` varchar(255) DEFAULT NULL, `password` varchar(255) DEFAULT NULL, `username` varchar(255) DEFAULT NULL,`accestoken` varchar(45) DEFAULT NULL,PRIMARY KEY (`id`)) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
INSERT INTO `Users` VALUES (1,'admin','admin','admin','admin','');
INSERT INTO `Users` VALUES (2,'user','user','user','user','');
CREATE TABLE `Authority` (`id` bigint(20) NOT NULL AUTO_INCREMENT, `name` varchar(255) DEFAULT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
INSERT INTO `Authority` VALUES (1,'ROLE_ADMIN');
INSERT INTO `Authority` VALUES (2,'ROLE_USER');
CREATE TABLE `user_authority` (`user_id` bigint(20) NOT NULL, `authority_id` bigint(20) NOT NULL, KEY `FK_r26d2qfcm6jm4jykhho6kn3u6` (`authority_id`), KEY `FK_5losscgu02yaej7prap7o6g5s` (`user_id`), CONSTRAINT `FK_5losscgu02yaej7prap7o6g5s` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`), CONSTRAINT `FK_r26d2qfcm6jm4jykhho6kn3u6` FOREIGN KEY (`authority_id`) REFERENCES `Authority` (`id`)) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO `user_authority` VALUES (1,1);
INSERT INTO `user_authority` VALUES (2,2);

