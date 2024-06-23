-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema IFOODSOCIAL
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema IFOODSOCIAL
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `IFOODSOCIAL` DEFAULT CHARACTER SET utf8 ;
USE `IFOODSOCIAL` ;

-- -----------------------------------------------------
-- Table `IFOODSOCIAL`.`CIDADE`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `IFOODSOCIAL`.`CIDADE` (
  `COD_CIDADE` INT NOT NULL,
  `DCR_CIDADE` VARCHAR(45) NULL,
  PRIMARY KEY (`COD_CIDADE`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `IFOODSOCIAL`.`BAIRRO`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `IFOODSOCIAL`.`BAIRRO` (
  `COD_BAIRRO` INT NOT NULL,
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
  `COD_LOCALIDADE` INT NOT NULL,
  `DCR_LOCALIDADE` VARCHAR(45) NULL,
  `COD_BAIRRO` INT NOT NULL,
  `LOCALIDADE_COD_LOCALIDADE` INT NOT NULL,
  PRIMARY KEY (`COD_LOCALIDADE`),
  INDEX `fk_LOCALIDADE_BAIRRO1_idx` (`COD_BAIRRO` ASC) VISIBLE,
  INDEX `fk_LOCALIDADE_LOCALIDADE1_idx` (`LOCALIDADE_COD_LOCALIDADE` ASC) VISIBLE,
  CONSTRAINT `fk_LOCALIDADE_BAIRRO1`
    FOREIGN KEY (`COD_BAIRRO`)
    REFERENCES `IFOODSOCIAL`.`BAIRRO` (`COD_BAIRRO`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_LOCALIDADE_LOCALIDADE1`
    FOREIGN KEY (`LOCALIDADE_COD_LOCALIDADE`)
    REFERENCES `IFOODSOCIAL`.`LOCALIDADE` (`COD_LOCALIDADE`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `IFOODSOCIAL`.`EMPREENDIMENTO`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `IFOODSOCIAL`.`EMPREENDIMENTO` (
  `COD_EMPREEDIMENTO` INT NOT NULL,
  `DCR_EMPREENDIMENTO` VARCHAR(45) NULL,
  `DCR_NOME_FANTASIA` VARCHAR(45) NULL,
  `DCR_ENDERECO` VARCHAR(45) NULL,
  `DCR_COMPLEMENTO` VARCHAR(45) NULL,
  `NUM_CEP` VARCHAR(10) NULL,
  `COD_CIDADE` INT NOT NULL,
  `BAIRRO_COD_BAIRRO` INT NOT NULL,
  `COD_LOCALIDADE` INT NOT NULL,
  `IMG_EMPREENDIMENTO` MEDIUMBLOB NULL,
  PRIMARY KEY (`COD_EMPREEDIMENTO`),
  INDEX `fk_EMPREENDIMENTO_CIDADE_idx` (`COD_CIDADE` ASC) VISIBLE,
  INDEX `fk_EMPREENDIMENTO_BAIRRO1_idx` (`BAIRRO_COD_BAIRRO` ASC) VISIBLE,
  INDEX `fk_EMPREENDIMENTO_LOCALIDADE1_idx` (`COD_LOCALIDADE` ASC) VISIBLE,
  CONSTRAINT `fk_EMPREENDIMENTO_CIDADE`
    FOREIGN KEY (`COD_CIDADE`)
    REFERENCES `IFOODSOCIAL`.`CIDADE` (`COD_CIDADE`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_EMPREENDIMENTO_BAIRRO1`
    FOREIGN KEY (`BAIRRO_COD_BAIRRO`)
    REFERENCES `IFOODSOCIAL`.`BAIRRO` (`COD_BAIRRO`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_EMPREENDIMENTO_LOCALIDADE1`
    FOREIGN KEY (`COD_LOCALIDADE`)
    REFERENCES `IFOODSOCIAL`.`LOCALIDADE` (`COD_LOCALIDADE`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `IFOODSOCIAL`.`FUNCIONARIO`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `IFOODSOCIAL`.`FUNCIONARIO` (
  `COD_FUNCIONARIO` INT NOT NULL,
  `NOME_FUNCIONARIO` VARCHAR(45) NULL,
  `NUM_TELEFONE` VARCHAR(15) NULL,
  `DCR_EMAIL` VARCHAR(45) NULL,
  PRIMARY KEY (`COD_FUNCIONARIO`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `IFOODSOCIAL`.`CLIENTE`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `IFOODSOCIAL`.`CLIENTE` (
  `COD_CLIENTE` INT NOT NULL,
  `NOME_CLIENTE` VARCHAR(45) NULL,
  `DCR_ENDERECO` VARCHAR(45) NULL,
  `DCR_COMPLEMENTO` VARCHAR(45) NULL,
  `NUM_CEP` VARCHAR(10) NULL,
  `COD_CIDADE` INT NOT NULL,
  `COD_BAIRRO` INT NOT NULL,
  `COD_LOCALIDADE` INT NOT NULL,
  `EMAIL_CLIENTE` VARCHAR(100) NULL,
  `TELEFONE_CLIENTE` VARCHAR(15) NULL,
  `DATA_CADASTRO` DATE NOT NULL,
  PRIMARY KEY (`COD_CLIENTE`),
  INDEX `fk_CLIENTE_CIDADE1_idx` (`COD_CIDADE` ASC) VISIBLE,
  INDEX `fk_CLIENTE_BAIRRO1_idx` (`COD_BAIRRO` ASC) VISIBLE,
  INDEX `fk_CLIENTE_LOCALIDADE1_idx` (`COD_LOCALIDADE` ASC) VISIBLE,
  CONSTRAINT `fk_CLIENTE_CIDADE1`
    FOREIGN KEY (`COD_CIDADE`)
    REFERENCES `IFOODSOCIAL`.`CIDADE` (`COD_CIDADE`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_CLIENTE_BAIRRO1`
    FOREIGN KEY (`COD_BAIRRO`)
    REFERENCES `IFOODSOCIAL`.`BAIRRO` (`COD_BAIRRO`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_CLIENTE_LOCALIDADE1`
    FOREIGN KEY (`COD_LOCALIDADE`)
    REFERENCES `IFOODSOCIAL`.`LOCALIDADE` (`COD_LOCALIDADE`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `IFOODSOCIAL`.`FORMA_PAGTO`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `IFOODSOCIAL`.`FORMA_PAGTO` (
  `COD_FORMA_PAGTO` INT NOT NULL,
  `DCR_FORMA_PAGTO` VARCHAR(45) NULL,
  PRIMARY KEY (`COD_FORMA_PAGTO`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `IFOODSOCIAL`.`PEDIDO`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `IFOODSOCIAL`.`PEDIDO` (
  `COD_PEDIDO` INT NOT NULL,
  `TIP_PEDIDO` CHAR(1) NULL,
  `DATA_PEDIDO` DATETIME NULL,
  `VLR_PEDIDO` DECIMAL(9,2) NULL,
  `COD_CLIENTE` INT NOT NULL,
  `COD_FORMA_PAGTO` INT NULL,
  `DCR_DADOS_PAGTO` VARCHAR(200) NULL,
  PRIMARY KEY (`COD_PEDIDO`),
  INDEX `fk_PEDIDO_CLIENTE1_idx` (`COD_CLIENTE` ASC) VISIBLE,
  INDEX `fk_PEDIDO_FORMA_PAGTO1_idx` (`COD_FORMA_PAGTO` ASC) VISIBLE,
  CONSTRAINT `fk_PEDIDO_CLIENTE1`
    FOREIGN KEY (`COD_CLIENTE`)
    REFERENCES `IFOODSOCIAL`.`CLIENTE` (`COD_CLIENTE`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_PEDIDO_FORMA_PAGTO1`
    FOREIGN KEY (`COD_FORMA_PAGTO`)
    REFERENCES `IFOODSOCIAL`.`FORMA_PAGTO` (`COD_FORMA_PAGTO`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `IFOODSOCIAL`.`CATEGORIA`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `IFOODSOCIAL`.`CATEGORIA` (
  `COD_CATEGORIA` INT NOT NULL,
  `DCR_CATEGORIA` VARCHAR(45) NULL,
  `IMG_CATEGORIA` MEDIUMBLOB NULL,
  `COD_EMPREEDIMENTO` INT NOT NULL,
  PRIMARY KEY (`COD_CATEGORIA`),
  INDEX `fk_CATEGORIA_EMPREENDIMENTO1_idx` (`COD_EMPREEDIMENTO` ASC) VISIBLE,
  CONSTRAINT `fk_CATEGORIA_EMPREENDIMENTO1`
    FOREIGN KEY (`COD_EMPREEDIMENTO`)
    REFERENCES `IFOODSOCIAL`.`EMPREENDIMENTO` (`COD_EMPREEDIMENTO`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_PRODUTO_TIPO_PRODUTO1`
    FOREIGN KEY (`COD_TIPO_PRODUTO`)
    REFERENCES `IFOODSOCIAL`.`TIPO_PRODUTO` (`COD_TIPO_PRODUTO`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `IFOODSOCIAL`.`PRODUTO`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `IFOODSOCIAL`.`PRODUTO` (
  `COD_PRODUTO` INT NOT NULL,
  `DCR_PRODUTO` VARCHAR(45) NULL,
  `IMG_PRODUTO` MEDIUMBLOB NULL,
  `VLR_PRODUTO` DECIMAL(9,2) NULL,
  `FLAG_DISPONIVEL` CHAR(1) NULL,
  `COD_CATEGORIA` INT NOT NULL,
  `COD_EMPREEDIMENTO` INT NOT NULL,
  `COD_TIPO_PRODUTO` INT NOT NULL,
  PRIMARY KEY (`COD_PRODUTO`),
  INDEX `fk_PRODUTO_CATEGORIA1_idx` (`COD_CATEGORIA` ASC) VISIBLE,
  INDEX `fk_PRODUTO_EMPREENDIMENTO1_idx` (`COD_EMPREEDIMENTO` ASC) VISIBLE,
  INDEX `fk_PRODUTO_TIPO_PRODUTO1_idx` (`COD_TIPO_PRODUTO` ASC) VISIBLE,
  CONSTRAINT `fk_PRODUTO_CATEGORIA1`
    FOREIGN KEY (`COD_CATEGORIA`)
    REFERENCES `IFOODSOCIAL`.`CATEGORIA` (`COD_CATEGORIA`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_PRODUTO_EMPREENDIMENTO1`
    FOREIGN KEY (`COD_EMPREEDIMENTO`)
    REFERENCES `IFOODSOCIAL`.`EMPREENDIMENTO` (`COD_EMPREEDIMENTO`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `IFOODSOCIAL`.`ITEM_PEDIDO`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `IFOODSOCIAL`.`ITEM_PEDIDO` (
  `COD_ITEM_PEDIDO` INT NOT NULL,
  `VLR_PRODUTO` DECIMAL(9,2) NULL,
  `QTD_PRODUTO` DECIMAL(9,2) NULL,
  `VLR_TOTAL` DECIMAL(9,2) NULL,
  `COD_PEDIDO` INT NOT NULL,
  `COD_PRODUTO` INT NOT NULL,
  PRIMARY KEY (`COD_ITEM_PEDIDO`),
  INDEX `fk_ITEM_PEDIDO_PEDIDO1_idx` (`COD_PEDIDO` ASC) VISIBLE,
  INDEX `fk_ITEM_PEDIDO_PRODUTO1_idx` (`COD_PRODUTO` ASC) VISIBLE,
  CONSTRAINT `fk_ITEM_PEDIDO_PEDIDO1`
    FOREIGN KEY (`COD_PEDIDO`)
    REFERENCES `IFOODSOCIAL`.`PEDIDO` (`COD_PEDIDO`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ITEM_PEDIDO_PRODUTO1`
    FOREIGN KEY (`COD_PRODUTO`)
    REFERENCES `IFOODSOCIAL`.`PRODUTO` (`COD_PRODUTO`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `IFOODSOCIAL`.`AVALIACAO_PEDIDO`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `IFOODSOCIAL`.`AVALIACAO_PEDIDO` (
  `COD_AVALIACAO_PEDIDO` INT NOT NULL,
  `NUM_NOTA_AVALIACAO` INT NULL,
  `TXT_AVALIACAO` VARCHAR(100) NULL,
  `COD_PEDIDO` INT NOT NULL,
  `COD_CLIENTE` INT NOT NULL,
  PRIMARY KEY (`COD_AVALIACAO_PEDIDO`),
  INDEX `fk_AVALIACAO_PEDIDO_PEDIDO1_idx` (`COD_PEDIDO` ASC) VISIBLE,
  INDEX `fk_AVALIACAO_PEDIDO_CLIENTE1_idx` (`COD_CLIENTE` ASC) VISIBLE,
  CONSTRAINT `fk_AVALIACAO_PEDIDO_PEDIDO1`
    FOREIGN KEY (`COD_PEDIDO`)
    REFERENCES `IFOODSOCIAL`.`PEDIDO` (`COD_PEDIDO`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_AVALIACAO_PEDIDO_CLIENTE1`
    FOREIGN KEY (`COD_CLIENTE`)
    REFERENCES `IFOODSOCIAL`.`CLIENTE` (`COD_CLIENTE`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `IFOODSOCIAL`.`DISPONIBILIDADE`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `IFOODSOCIAL`.`DISPONIBILIDADE` (
  `COD_DISPONIBILIDADE` INT NOT NULL,
  `NUM_DIA_SEMANA` INT NULL,
  `HORA_FIM` DATETIME NULL,
  `HORA_INICIO` DATETIME NULL,
  `COD_LOCALIDADE` INT NOT NULL,
  `COD_EMPREEDIMENTO` INT NOT NULL,
  PRIMARY KEY (`COD_DISPONIBILIDADE`),
  INDEX `fk_DISPONIBILIDADE_LOCALIDADE1_idx` (`COD_LOCALIDADE` ASC) VISIBLE,
  INDEX `fk_DISPONIBILIDADE_EMPREENDIMENTO1_idx` (`COD_EMPREEDIMENTO` ASC) VISIBLE,
  INDEX `fk_DISPONIBILIDADE_LOCALIDADE2_idx` (`COD_LOCALIDADE` ASC) VISIBLE,
  CONSTRAINT `fk_DISPONIBILIDADE_LOCALIDADE1`
    FOREIGN KEY (`COD_LOCALIDADE`)
    REFERENCES `IFOODSOCIAL`.`LOCALIDADE` (`COD_LOCALIDADE`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_DISPONIBILIDADE_EMPREENDIMENTO1`
    FOREIGN KEY (`COD_EMPREEDIMENTO`)
    REFERENCES `IFOODSOCIAL`.`EMPREENDIMENTO` (`COD_EMPREEDIMENTO`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_DISPONIBILIDADE_LOCALIDADE2`
    FOREIGN KEY (`COD_LOCALIDADE`)
    REFERENCES `IFOODSOCIAL`.`LOCALIDADE` (`COD_LOCALIDADE`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `IFOODSOCIAL`.`DISPON_EXCECAO`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `IFOODSOCIAL`.`DISPON_EXCECAO` (
  `COD_DISPON_EXCECAO` INT NOT NULL,
  `DATA_EXCECAO` DATETIME NULL,
  `TIP_EXCECAO` CHAR(1) NULL,
  `HORA_INICIO` DATETIME NULL,
  `HORA_FIM` DATETIME NULL,
  `COD_EMPREEDIMENTO` INT NOT NULL,
  `COD_LOCALIDADE` INT NOT NULL,
  PRIMARY KEY (`COD_DISPON_EXCECAO`),
  INDEX `fk_DISPON_EXCECAO_EMPREENDIMENTO1_idx` (`COD_EMPREEDIMENTO` ASC) VISIBLE,
  INDEX `fk_DISPON_EXCECAO_LOCALIDADE1_idx` (`COD_LOCALIDADE` ASC) VISIBLE,
  CONSTRAINT `fk_DISPON_EXCECAO_EMPREENDIMENTO1`
    FOREIGN KEY (`COD_EMPREEDIMENTO`)
    REFERENCES `IFOODSOCIAL`.`EMPREENDIMENTO` (`COD_EMPREEDIMENTO`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_DISPON_EXCECAO_LOCALIDADE1`
    FOREIGN KEY (`COD_LOCALIDADE`)
    REFERENCES `IFOODSOCIAL`.`LOCALIDADE` (`COD_LOCALIDADE`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `IFOODSOCIAL`.`ENTREGA`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `IFOODSOCIAL`.`ENTREGA` (
  `COD_ENTREGA` INT NOT NULL,
  `COD_PEDIDO` INT NOT NULL,
  `COD_FUNCIONARIO` INT NOT NULL,
  `DATA_SAIDA` DATETIME NULL,
  `DATA_ENTREGA` DATETIME NULL,
  `VLR_ENTREGA` DECIMAL(9,2) NULL,
  `DCR_ENDERECO` VARCHAR(45) NULL,
  `DCR_COMPLEM` VARCHAR(45) NULL,
  `NUM_CEP` VARCHAR(10) NULL,
  `TXT_REFERENCIA` VARCHAR(45) NULL,
  `COD_CIDADE` INT NOT NULL,
  `COD_BAIRRO` INT NOT NULL,
  `COD_LOCALIDADE` INT NOT NULL,
  `FLAG_ENCOMENDA` CHAR(1) NULL,
  `FLAG_ENTREGADOR` CHAR(1) NULL,
  PRIMARY KEY (`COD_ENTREGA`),
  INDEX `fk_ENTREGA_CIDADE1_idx` (`COD_CIDADE` ASC) VISIBLE,
  INDEX `fk_ENTREGA_BAIRRO1_idx` (`COD_BAIRRO` ASC) VISIBLE,
  INDEX `fk_ENTREGA_LOCALIDADE1_idx` (`COD_LOCALIDADE` ASC) VISIBLE,
  INDEX `fk_ENTREGA_FUNCIONARIO1_idx` (`COD_FUNCIONARIO` ASC) VISIBLE,
  INDEX `fk_ENTREGA_PEDIDO1_idx` (`COD_PEDIDO` ASC) VISIBLE,
  CONSTRAINT `fk_ENTREGA_CIDADE1`
    FOREIGN KEY (`COD_CIDADE`)
    REFERENCES `IFOODSOCIAL`.`CIDADE` (`COD_CIDADE`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ENTREGA_BAIRRO1`
    FOREIGN KEY (`COD_BAIRRO`)
    REFERENCES `IFOODSOCIAL`.`BAIRRO` (`COD_BAIRRO`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ENTREGA_LOCALIDADE1`
    FOREIGN KEY (`COD_LOCALIDADE`)
    REFERENCES `IFOODSOCIAL`.`LOCALIDADE` (`COD_LOCALIDADE`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ENTREGA_FUNCIONARIO1`
    FOREIGN KEY (`COD_FUNCIONARIO`)
    REFERENCES `IFOODSOCIAL`.`FUNCIONARIO` (`COD_FUNCIONARIO`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ENTREGA_PEDIDO1`
    FOREIGN KEY (`COD_PEDIDO`)
    REFERENCES `IFOODSOCIAL`.`PEDIDO` (`COD_PEDIDO`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `IFOODSOCIAL`.`EVENTO`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `IFOODSOCIAL`.`EVENTO` (
  `COD_EVENTO` INT NOT NULL,
  `DCR_EVENTO` VARCHAR(45) NULL,
  `NUM_ORDEM_EVENTO` INT NULL,
  PRIMARY KEY (`COD_EVENTO`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `IFOODSOCIAL`.`RASTREAMENTO_PEDIDO`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `IFOODSOCIAL`.`RASTREAMENTO_PEDIDO` (
  `COD_RASTREAMENTO_PEDIDO` INT NOT NULL,
  `COD_PEDIDO` INT NOT NULL,
  `COD_EVENTO_PEDIDO` INT NOT NULL,
  `DATA_HORA_EVENTO` DATETIME NULL,
  PRIMARY KEY (`COD_RASTREAMENTO_PEDIDO`),
  INDEX `fk_RASTREAMENTO_PEDIDO_PEDIDO1_idx` (`COD_PEDIDO` ASC) VISIBLE,
  INDEX `fk_RASTREAMENTO_PEDIDO_EVENTO_PEDIDO1_idx` (`COD_EVENTO_PEDIDO` ASC) VISIBLE,
  CONSTRAINT `fk_RASTREAMENTO_PEDIDO_PEDIDO1`
    FOREIGN KEY (`COD_PEDIDO`)
    REFERENCES `IFOODSOCIAL`.`PEDIDO` (`COD_PEDIDO`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_RASTREAMENTO_PEDIDO_EVENTO_PEDIDO1`
    FOREIGN KEY (`COD_EVENTO_PEDIDO`)
    REFERENCES `IFOODSOCIAL`.`EVENTO` (`COD_EVENTO`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `IFOODSOCIAL`.`EMPREND_FUNCIONARIO`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `IFOODSOCIAL`.`EMPREND_FUNCIONARIO` (
  `COD_EMPREEND_FUNCIONARIO` INT NOT NULL,
  `TIP_FUNCIONARIO` CHAR(1) NULL,
  `COD_EMPREEDIMENTO` INT NOT NULL,
  `COD_FUNCIONARIO` INT NOT NULL,
  `IMG_EMPREEND_FUNCIONARIO` MEDIUMBLOB NULL,
  PRIMARY KEY (`COD_EMPREEND_FUNCIONARIO`),
  INDEX `fk_EMPREND_FUNCIONARIO_EMPREENDIMENTO1_idx` (`COD_EMPREEDIMENTO` ASC) VISIBLE,
  INDEX `fk_EMPREND_FUNCIONARIO_FUNCIONARIO1_idx` (`COD_FUNCIONARIO` ASC) VISIBLE,
  CONSTRAINT `fk_EMPREND_FUNCIONARIO_EMPREENDIMENTO1`
    FOREIGN KEY (`COD_EMPREEDIMENTO`)
    REFERENCES `IFOODSOCIAL`.`EMPREENDIMENTO` (`COD_EMPREEDIMENTO`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_EMPREND_FUNCIONARIO_FUNCIONARIO1`
    FOREIGN KEY (`COD_FUNCIONARIO`)
    REFERENCES `IFOODSOCIAL`.`FUNCIONARIO` (`COD_FUNCIONARIO`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `IFOODSOCIAL`.`CARDAPIO`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `IFOODSOCIAL`.`CARDAPIO` (
  `COD_CARDAPIO` INT NOT NULL,
  `DCR_CARDAPIO` VARCHAR(45) NULL,
  `DCR_TITULO_APRES` VARCHAR(45) NULL,
  `COD_EMPREEDIMENTO` INT NOT NULL,
  PRIMARY KEY (`COD_CARDAPIO`),
  INDEX `fk_CARDAPIO_EMPREENDIMENTO1_idx` (`COD_EMPREEDIMENTO` ASC) VISIBLE,
  CONSTRAINT `fk_CARDAPIO_EMPREENDIMENTO1`
    FOREIGN KEY (`COD_EMPREEDIMENTO`)
    REFERENCES `IFOODSOCIAL`.`EMPREENDIMENTO` (`COD_EMPREEDIMENTO`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `IFOODSOCIAL`.`SECAO_CARDAPIO`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `IFOODSOCIAL`.`SECAO_CARDAPIO` (
  `COD_SECAO_CARDAPIO` INT NOT NULL,
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
  `COD_SECAO_PRODUTO` VARCHAR(45) NOT NULL,
  `PRODUTO_COD_PRODUTO` INT NOT NULL,
  `SECAO_CARDAPIO_COD_SECAO_CARDAPIO` INT NOT NULL,
  `NUM_ORDEM` VARCHAR(45) NULL,
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
-- Table `IFOODSOCIAL`.`TIPO_CARDAPIO`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `IFOODSOCIAL`.`TIPO_CARDAPIO` (
  `COD_TIPO_CARDAPIO` INT NOT NULL,
  `DCR_TIPO_CARDAPIO` VARCHAR(45) NULL,
  PRIMARY KEY (`COD_TIPO_CARDAPIO`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `IFOODSOCIAL`.`TIPO_PRODUTO`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `IFOODSOCIAL`.`TIPO_PRODUTO` (
  `COD_TIPO_PRODUTO` INT NOT NULL,
  `DCR_TIPO_PRODUTO` VARCHAR(45) NULL,
  PRIMARY KEY (`COD_TIPO_PRODUTO`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `IFOODSOCIAL`.`VENDA`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `IFOODSOCIAL`.`VENDA` (
  `COD_VENDA` INT NOT NULL,
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
-- Table `IFOODSOCIAL`.`ENTREGADOR`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `IFOODSOCIAL`.`ENTREGADOR` (
  `COD_ENTREGADOR` INT NOT NULL,
  `NOME_ENTREGADOR` VARCHAR(100) NOT NULL,
  `EMAIL_ENTREGADOR` VARCHAR(100) NULL,
  `TELEFONE_ENTREGADOR` VARCHAR(15) NULL,
  PRIMARY KEY (`COD_ENTREGADOR`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `IFOODSOCIAL`.`TRANSACAO_FINANCEIRA`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `IFOODSOCIAL`.`TRANSACAO_FINANCEIRA` (
  `COD_TRANSACAO` INT NOT NULL,
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
