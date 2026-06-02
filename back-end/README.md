# IespFlix - BackEnd

**Disciplina:** BackEnd - Tecnologias Web  
**Professor:** Rodrigo Fujioka  
**Instituicao:** UNIESP

## Como rodar

### Backend

```bash
cd IespFlix/tecback-master/back-end
mvn spring-boot:run
```

Se o Maven nao estiver instalado no Windows:

```bash
cd IespFlix/tecback-master/back-end
.\mvnw.cmd spring-boot:run
```

API: http://localhost:8080  
Swagger: http://localhost:8080/swagger-ui.html  
H2 Console: http://localhost:8080/h2-console

### Frontend

```bash
cd IespFlix/tecback-master/front-end
npm install
npm run dev
```

App: http://localhost:5173

## Integracoes externas

- ViaCEP: preenchimento automatico de endereco para funcionarios.
- BrasilAPI: feriados, CEP e bancos via `@FeignClient`.

## Endpoints principais

- `GET /api/v1/conteudos`
- `GET /api/v1/conteudos/top?n=5`
- `GET /api/v1/conteudos/apos/{ano}`
- `GET /api/v1/usuarios?page=0&size=10&nome=`
- `GET /api/v1/feriados/{ano}`
- `GET /api/v1/bancos`
- `GET /api/v1/cep/{cep}`
