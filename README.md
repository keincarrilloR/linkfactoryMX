# LinkFactory — MX

Dashboard en tiempo real para el monitoreo de máquinas industriales (molinos, slitter, roscadora) vía WebSocket.

---

## Tecnologías

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite 7](https://vitejs.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [React Router DOM v7](https://reactrouter.com/)
- [Lucide React](https://lucide.dev/)

---

## Requisitos previos

| Herramienta | Versión mínima            |
| ----------- | ------------------------- |
| Node.js     | `>=20.19.0` o `>=22.12.0` |
| npm         | `>=8`                     |

---

## Instalación y uso

```bash
# 1. Clonar el repositorio
git clone <url-del-repo>
cd linkfactorymx

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno (ver sección siguiente)

# 4. Levantar en modo desarrollo
npm run dev
```

### Scripts disponibles

| Script            | Descripción                                       |
| ----------------- | ------------------------------------------------- |
| `npm run dev`     | Servidor de desarrollo en `http://localhost:5173` |
| `npm run build`   | Build de producción en `/dist`                    |
| `npm run preview` | Preview del build de producción                   |
| `npm run lint`    | Ejecutar ESLint                                   |

---

## Variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
VITE_SOCKET_URL=ws://TU_SERVIDOR:PUERTO
```

> Ejemplo: `VITE_SOCKET_URL=ws://monitormx.rymco.io:8080`

Sin esta variable la app no podrá conectarse al servidor WebSocket y no recibirá datos.

---

## Estructura del proyecto

```
linkfactorymx/
├── public/
├── src/
│   ├── components/
│   │   ├── cards/          # StatusCard
│   │   ├── informativo/    # Estado, PiezasTurno, OdtDesArt, Tonelaje
│   │   ├── main/           # Galvanizado, Variables, Informativo
│   │   ├── Clock.tsx
│   │   ├── CodigoColores.tsx
│   │   └── Conectado.tsx
│   ├── config/
│   │   └── maquinas.tsx    # Definición de máquinas y sus variables/grafana
│   ├── context/
│   │   ├── ClockContext.tsx
│   │   └── SocketContext.tsx
│   ├── hooks/
│   │   └── useSocket.ts
│   ├── layout/
│   │   └── Layout.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   └── MaquinaPage.tsx
│   ├── styles/
│   │   ├── colors.ts
│   │   ├── getMaxMin.ts
│   │   └── icons.ts
│   ├── types/
│   │   ├── colors.d.ts
│   │   ├── index.d.ts
│   │   ├── maquinaData.d.ts
│   │   └── socketContext.d.ts
│   ├── utils/
│   │   └── getColor.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .env                    # ← Debes crearlo tú (ver arriba)
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## Máquinas configuradas

| ID       | Nombre    | Variables | Galvanizado |
| -------- | --------- | --------- | ----------- |
| `mxm001` | Molino 1  | ✅        | ✅          |
| `mxm002` | Molino 2  | ✅        | ❌          |
| `mxm003` | Molino 3  | ✅        | ❌          |
| `mxsl1`  | Slitter   | ❌        | ❌          |
| `mxrs1`  | Roscadora | ❌        | ❌          |

---

## Código de colores de las tarjetas

| Color      | Significado                                        |
| ---------- | -------------------------------------------------- |
| 🟢 Verde   | Valor dentro del rango nominal                     |
| 🟠 Naranja | Valor en zona preventiva (entre mín/máx y nominal) |
| 🔴 Rojo    | Valor fuera del rango mín/máx                      |
| 🟣 Morado  | Sin rango configurado (min y max = 0)              |
| ⚫ Gris    | Máquina detenida                                   |
| ⬛ Negro   | Sin conexión / valor inválido                      |

---

## Conexión WebSocket

El servidor WebSocket debe enviar un JSON con la siguiente estructura:

```json
{
  "mxm001": {
    "informativo": {
      "estadoYRun": { "estado": "Corriendo", "turno": "Matutino", "piezas": 120 },
      "odtArtDesc": { "odt": "ODT-001", "articulo": "ART-001", "descripcion": "Tubo redondo" },
      "tonelaje": { "tont": 3.5, "maquina": "mxm001" }
    },
    "variables": {
      "velLinea": {
        "nombre": "Velocidad de línea",
        "actual": 45.2,
        "maxMinNom": { "dbp_valmin": 20, "dbp_valmax": 80, "dbp_valnom": 50, ... }
      }
    }
  }
}
```

Si se pierde la conexión, la app notifica al usuario y recarga automáticamente cada 5 segundos.

---

## Deploy

El build se configura para desplegarse bajo la ruta `/operaweb/dist/` (ver `vite.config.ts`). Para cambiar la ruta base, modifica:

```ts
// vite.config.ts
export default defineConfig({
  base: '/operaweb/dist/' // ← Cambia esta ruta si es necesario
})
```

---

## Grafana

Cada variable tiene un enlace a su dashboard de Grafana configurado en `src/config/maquinas.tsx`. Las tarjetas son clickeables y abren el dashboard correspondiente en una nueva pestaña.
