-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema IFOODSOCIAL
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `IFOODSOCIAL` DEFAULT CHARACTER SET utf8 ;
USE `IFOODSOCIAL` ;

-- -----------------------------------------------------
-- Table `IFOODSOCIAL`.`CIDADE`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `IFOODSOCIAL`.`CIDADE` (
  `COD_CIDADE` INT NOT NULL AUTO_INCREMENT,
  `DCR_CIDADE` VARCHAR(45) NULL,
  PRIMARY KEY (`COD_CIDADE`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `IFOODSOCIAL`.`BAIRRO`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `IFOODSOCIAL`.`BAIRRO` (
  `COD_BAIRRO` INT NOT NULL AUTO_INCREMENT,
  `DCR_BAIRRO` VARCHAR(45) NULL,
  `COD_CIDADE` INT NOT NULL,
  PRIMARY KEY (`COD_BAIRRO`),
  INDEX `fk_BAIRRO_CIDADE1_idx` (`COD_CIDADE` ASC) VISIBLE,
  CONSTRAINT `fk_BAIRRO_CIDADE1`
    FOREIGN KEY (`COD_CIDADE`)
    REFERENCES `IFOODSOCIAL`.`CIDADE` (`COD_CIDADE`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `IFOODSOCIAL`.`LOCALIDADE`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `IFOODSOCIAL`.`LOCALIDADE` (
  `COD_LOCALIDADE` INT NOT NULL AUTO_INCREMENT,
  `DCR_LOCALIDADE` VARCHAR(45) NULL,
  `COD_BAIRRO` INT NOT NULL,
  PRIMARY KEY (`COD_LOCALIDADE`),
  INDEX `fk_LOCALIDADE_BAIRRO1_idx` (`COD_BAIRRO` ASC) VISIBLE,
  CONSTRAINT `fk_LOCALIDADE_BAIRRO1`
    FOREIGN KEY (`COD_BAIRRO`)
    REFERENCES `IFOODSOCIAL`.`BAIRRO` (`COD_BAIRRO`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `IFOODSOCIAL`.`EMPREENDIMENTO`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `IFOODSOCIAL`.`EMPREENDIMENTO` (
  `COD_EMPREENDIMENTO` INT NOT NULL AUTO_INCREMENT,
  `DCR_EMPREENDIMENTO` VARCHAR(45) NULL,
  `COD_LOCALIDADE` INT NOT NULL,
  PRIMARY KEY (`COD_EMPREENDIMENTO`),
  INDEX `fk_EMPREENDIMENTO_LOCALIDADE1_idx` (`COD_LOCALIDADE` ASC) VISIBLE,
  CONSTRAINT `fk_EMPREENDIMENTO_LOCALIDADE1`
    FOREIGN KEY (`COD_LOCALIDADE`)
    REFERENCES `IFOODSOCIAL`.`LOCALIDADE` (`COD_LOCALIDADE`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `IFOODSOCIAL`.`TIPO_CARDAPIO`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `IFOODSOCIAL`.`TIPO_CARDAPIO` (
  `COD_TIPO_CARDAPIO` INT NOT NULL AUTO_INCREMENT,
  `DCR_TIPO_CARDAPIO` VARCHAR(45) NULL,
  PRIMARY KEY (`COD_TIPO_CARDAPIO`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `IFOODSOCIAL`.`CARDAPIO`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `IFOODSOCIAL`.`CARDAPIO` (
  `COD_CARDAPIO` INT NOT NULL AUTO_INCREMENT,
  `DCR_CARDAPIO` VARCHAR(45) NULL,
  `COD_TIPO_CARDAPIO` INT NOT NULL,
  PRIMARY KEY (`COD_CARDAPIO`),
  INDEX `fk_CARDAPIO_TIPO_CARDAPIO1_idx` (`COD_TIPO_CARDAPIO` ASC) VISIBLE,
  CONSTRAINT `fk_CARDAPIO_TIPO_CARDAPIO1`
    FOREIGN KEY (`COD_TIPO_CARDAPIO`)
    REFERENCES `IFOODSOCIAL`.`TIPO_CARDAPIO` (`COD_TIPO_CARDAPIO`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `IFOODSOCIAL`.`TIPO_PRODUTO`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `IFOODSOCIAL`.`TIPO_PRODUTO` (
  `COD_TIPO_PRODUTO` INT NOT NULL AUTO_INCREMENT,
  `DCR_TIPO_PRODUTO` VARCHAR(45) NULL,
  PRIMARY KEY (`COD_TIPO_PRODUTO`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `IFOODSOCIAL`.`PRODUTO`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `IFOODSOCIAL`.`PRODUTO` (
  `COD_PRODUTO` INT NOT NULL AUTO_INCREMENT,
  `DCR_PRODUTO` VARCHAR(45) NULL,
  `COD_TIPO_PRODUTO` INT NOT NULL,
  PRIMARY KEY (`COD_PRODUTO`),
  INDEX `fk_PRODUTO_TIPO_PRODUTO1_idx` (`COD_TIPO_PRODUTO` ASC) VISIBLE,
  CONSTRAINT `fk_PRODUTO_TIPO_PRODUTO1`
    FOREIGN KEY (`COD_TIPO_PRODUTO`)
    REFERENCES `IFOODSOCIAL`.`TIPO_PRODUTO` (`COD_TIPO_PRODUTO`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `IFOODSOCIAL`.`SECAO_CARDAPIO`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `IFOODSOCIAL`.`SECAO_CARDAPIO` (
  `COD_SECAO_CARDAPIO` INT NOT NULL AUTO_INCREMENT,
  `DCR_SECAO_CARDAPIO` VARCHAR(45) NULL,
  `DCR_TITULO_APRES` VARCHAR(45) NULL,
  `COD_CARDAPIO` INT NOT NULL,
  `NUM_ORDEM` INT NULL,
  PRIMARY KEY (`COD_SECAO_CARDAPIO`),
  INDEX `fk_SECAO_CARDAPIO_CARDAPIO1_idx` (`COD_CARDAPIO` ASC) VISIBLE,
  CONSTRAINT `fk_SECAO_CARDAPIO_CARDAPIO1`
    FOREIGN KEY (`COD_CARDAPIO`)
    REFERENCES `IFOODSOCIAL`.`CARDAPIO` (`COD_CARDAPIO`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `IFOODSOCIAL`.`SECAO_PRODUTO`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `IFOODSOCIAL`.`SECAO_PRODUTO` (
  `COD_SECAO_PRODUTO` INT NOT NULL AUTO_INCREMENT,
  `PRODUTO_COD_PRODUTO` INT NOT NULL,
  `SECAO_CARDAPIO_COD_SECAO_CARDAPIO` INT NOT NULL,
  `NUM_ORDEM` INT NULL,
  INDEX `fk_SECAO_PRODUTO_PRODUTO1_idx` (`PRODUTO_COD_PRODUTO` ASC) VISIBLE,
  INDEX `fk_SECAO_PRODUTO_SECAO_CARDAPIO1_idx` (`SECAO_CARDAPIO_COD_SECAO_CARDAPIO` ASC) VISIBLE,
  PRIMARY KEY (`COD_SECAO_PRODUTO`),
  CONSTRAINT `fk_SECAO_PRODUTO_PRODUTO1`
    FOREIGN KEY (`PRODUTO_COD_PRODUTO`)
    REFERENCES `IFOODSOCIAL`.`PRODUTO` (`COD_PRODUTO`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_SECAO_PRODUTO_SECAO_CARDAPIO1`
    FOREIGN KEY (`SECAO_CARDAPIO_COD_SECAO_CARDAPIO`)
    REFERENCES `IFOODSOCIAL`.`SECAO_CARDAPIO` (`COD_SECAO_CARDAPIO`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `IFOODSOCIAL`.`VENDA`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `IFOODSOCIAL`.`VENDA` (
  `COD_VENDA` INT NOT NULL AUTO_INCREMENT,
  `DATA_VENDA` DATE NOT NULL,
  `VALOR_TOTAL` DECIMAL(10,2) NOT NULL,
  `COD_PRODUTO` INT NOT NULL,
  `COD_CLIENTE` INT NOT NULL,
  `COD_LOCALIDADE` INT NOT NULL,
  PRIMARY KEY (`COD_VENDA`),
  INDEX `fk_VENDA_PRODUTO1_idx` (`COD_PRODUTO` ASC) VISIBLE,
  INDEX `fk_VENDA_CLIENTE1_idx` (`COD_CLIENTE` ASC) VISIBLE,
  INDEX `fk_VENDA_LOCALIDADE1_idx` (`COD_LOCALIDADE` ASC) VISIBLE,
  CONSTRAINT `fk_VENDA_PRODUTO1`
    FOREIGN KEY (`COD_PRODUTO`)
    REFERENCES `IFOODSOCIAL`.`PRODUTO` (`COD_PRODUTO`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_VENDA_CLIENTE1`
    FOREIGN KEY (`COD_CLIENTE`)
    REFERENCES `IFOODSOCIAL`.`CLIENTE` (`COD_CLIENTE`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_VENDA_LOCALIDADE1`
    FOREIGN KEY (`COD_LOCALIDADE`)
    REFERENCES `IFOODSOCIAL`.`LOCALIDADE` (`COD_LOCALIDADE`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `IFOODSOCIAL`.`CLIENTE`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `IFOODSOCIAL`.`CLIENTE` (
  `COD_CLIENTE` INT NOT NULL AUTO_INCREMENT,
  `NOME_CLIENTE` VARCHAR(100) NOT NULL,
  `EMAIL_CLIENTE` VARCHAR(100) NULL,
  `TELEFONE_CLIENTE` VARCHAR(15) NULL,
  `DATA_CADASTRO` DATE NOT NULL,
  PRIMARY KEY (`COD_CLIENTE`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `IFOODSOCIAL`.`ENTREGADOR`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `IFOODSOCIAL`.`ENTREGADOR` (
  `COD_ENTREGADOR` INT NOT NULL AUTO_INCREMENT,
  `NOME_ENTREGADOR` VARCHAR(100) NOT NULL,
  `EMAIL_ENTREGADOR` VARCHAR(100) NULL,
  `TELEFONE_ENTREGADOR` VARCHAR(15) NULL,
  PRIMARY KEY (`COD_ENTREGADOR`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `IFOODSOCIAL`.`TRANSAÇÃO_FINANCEIRA`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `IFOODSOCIAL`.`TRANSAÇÃO_FINANCEIRA` (
  `COD_TRANSACAO` INT NOT NULL AUTO_INCREMENT,
  `DATA_TRANSACAO` DATE NOT NULL,
  `VALOR_TRANSACAO` DECIMAL(10,2) NOT NULL,
  `COD_VENDA` INT NOT NULL,
  `COD_CLIENTE` INT NOT NULL,
  `COD_ENTREGADOR` INT NULL,
  PRIMARY KEY (`COD_TRANSACAO`),
  INDEX `fk_TRANSACAO_VENDA1_idx` (`COD_VENDA` ASC) VISIBLE,
  INDEX `fk_TRANSACAO_CLIENTE1_idx` (`COD_CLIENTE` ASC) VISIBLE,
  INDEX `fk_TRANSACAO_ENTREGADOR1_idx` (`COD_ENTREGADOR` ASC) VISIBLE,
  CONSTRAINT `fk_TRANSACAO_VENDA1`
    FOREIGN KEY (`COD_VENDA`)
    REFERENCES `IFOODSOCIAL`.`VENDA` (`COD_VENDA`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_TRANSACAO_CLIENTE1`
    FOREIGN KEY (`COD_CLIENTE`)
    REFERENCES `IFOODSOCIAL`.`CLIENTE` (`COD_CLIENTE`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_TRANSACAO_ENTREGADOR1`
    FOREIGN KEY (`COD_ENTREGADOR`)
    REFERENCES `IFOODSOCIAL`.`ENTREGADOR` (`COD_ENTREGADOR`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
