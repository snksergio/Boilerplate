# SonarQube
Plataforma para inspeção contínua da qualidade do código para realizar revisões automáticas com análise estática de código para detectar bugs, code smells e vulnerabilidades de segurança. Também oferece relatórios sobre código duplicado, padrões de codificação, testes unitários, cobertura de código, complexidade de código, comentários, bugs e vulnerabilidades de segurança.

### Implementando SonarQube (Opcional)
> Para instalar o SonarQube é necessário atender os seguintes pré-requisitos: Java (Oracle JRE 7 or greater or OpenJDK 7 or greater) e Database (SQL Server, MySQL, Oracle ou PostegreSQL)

**1 )** 
Criar uma base nova para o projeto (Ex: createdb sonarqube)

**2 )** 
Baixar o [SonarQube](https://binaries.sonarsource.com/Distribution/sonarqube/sonarqube-7.7.zip) e também o [SonarScanner](https://docs.sonarqube.org/latest/analysis/scan/sonarscanner/)

**3 )** 
Descompactar em qualquer diretório, nesse caso C:\sonarqube-7.7

**4 )** 
Editar as configurações de conexão com a base de dados no arquivo `C:\sonarqube-7.7\conf\sonar.properties`
```bash
sonar.jdbc.username=postgres
sonar.jdbc.password=postgres
sonar.jdbc.url=jdbc:postgresql://localhost/sonarqube?currentSchema=my_schema
```
**5 )** 
Setar as variáveis de ambientes no `Path`
```bash
C:\sonar-scanner-3.3.0.1492-windows\bin
C:\sonarqube-7.7\bin\windows-x86-64
```
**6 )** 
Configurar o arquivo `sonar-project.properties` que se encontra na pasta raiz do Boilerplate

**7 )** 
Iniciar o serviço do SonarQube pelo terminal digitando `startsonar` e após o serviço iniciado inicar o serviço do SonarScanner também pelo terminal `sonar-scanner` **(obs:** SonarScanner será o responsável pela leitura do projeto, ele irá validar o código de acordo com o projectVersion dentro do arquivo `sonar-project.properties` **)**

### Configuração
Configuração do arquivo `sonar-project.properties` do Boilerplate

```js
sonar.projectKey=Boilerplate
sonar.projectVersion=1.0
sonar.projectName=Boilerplate

# Informações de configuração
sonar.sources=.
sonar.language=js
sonar.sourceEncoding=UTF-8
sonar.javascript.file.suffixes=.js,.jsx

# Ativa o Visual Studio bootstrapper (apenas projetos .NET)
sonar.visualstudio.enable=true
```

> Obs: `sonar.projectVersion` defina a versão à ser avaliada, ou seja, cada 'pacote' de alteração a ser inspecionada pelo SonarQube deve-se alterar a versão. 
<br>
