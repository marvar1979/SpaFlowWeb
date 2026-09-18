# SpaFlow — HTML + CSS + JavaScript + JSON

Conversión del proyecto `SpaFlow(1).zip` (ASP.NET Core 10 / Razor Pages / EF Core / SQL Server / Identity) a una aplicación web estática basada en:

- HTML5
- CSS3 propio
- JavaScript vanilla
- JSON
- `localStorage` para persistencia local

No requiere Node, .NET, SQL Server, Bootstrap ni CDN.

## Funciones trasladadas

La conversión conserva las funciones que el proyecto original expone y traslada también las entidades comerciales que ya estaban modeladas en C#:

- Acceso por perfiles de demostración.
- Dashboard con citas del día, confirmadas, clientes, ingresos y stock crítico.
- Agenda por fecha y estado.
- Alta de reservas internas.
- Reserva pública para clientes.
- Flujo de estados: Pending → Confirmed → CheckedIn → InService → Completed.
- Cancelación de citas.
- Validación de cruces por profesional y cabina.
- Clientes: alta, edición, búsqueda, consentimientos, alergias, contraindicaciones, notas, puntos e historial.
- Servicios: categorías, descripción, duración, precio, cabina y comisión.
- Profesionales: especialidad, sucursal, comisión y servicios asignados.
- Cabinas y sucursales.
- Inventario: productos, SKU, precio, mínimo y movimientos.
- Ajustes de entrada/salida y alertas de stock.
- Ventas de productos/servicios.
- Pagos de citas y ventas.
- Gastos.
- Membresías, planes y gift cards.
- Reportes por período.
- Configuración del SPA.
- Auditoría local.
- Exportación e importación de respaldo JSON.
- Diseño responsive para escritorio, tablet y móvil.

## Ejecución rápida

### Opción A — VS Code + Live Server (recomendada)

1. Descomprime el proyecto.
2. Abre la carpeta `SpaFlow_HTML_CSS_JS_JSON` en VS Code.
3. Abre `index.html`.
4. Usa **Open with Live Server**.

Con Live Server, la aplicación carga los archivos ubicados en `/json` mediante `fetch`.

### Opción B — doble clic

También puedes abrir `index.html` directamente. Algunos navegadores bloquean `fetch()` sobre archivos locales; por eso se incluye `js/seed.js` como respaldo de los JSON. El sistema sigue siendo funcional.

### Opción C — servidor de Python

```bash
python -m http.server 5500
```

Luego visita:

```text
http://localhost:5500/
```

## GitHub Pages

La raíz ya contiene `index.html` y `.nojekyll`.

1. Sube **el contenido de esta carpeta** al repositorio.
2. En GitHub: `Settings → Pages`.
3. Source: `Deploy from a branch`.
4. Branch: `main`.
5. Folder: `/(root)`.
6. Guarda.

## Datos

Los datos iniciales están en:

```text
json/business.json
json/users.json
json/services.json
json/employees.json
json/clients.json
json/appointments.json
json/inventory.json
json/commerce.json
json/memberships.json
json/audit.json
```

`js/seed.js` es una copia de respaldo de dichos archivos para soportar apertura directa con `file://`.

Después del primer arranque, las modificaciones se guardan en `localStorage` con la clave:

```text
spaflow_static_db_v1
```

Desde **Configuración** puedes:

- exportar el estado actual a JSON;
- importar un respaldo;
- restablecer los datos demostrativos.

## Diferencia técnica respecto al original

El proyecto original tenía seguridad y persistencia de servidor mediante ASP.NET Core Identity, Entity Framework Core y SQL Server. Una aplicación compuesta exclusivamente por HTML/CSS/JS/JSON no puede conservar esas garantías del lado servidor.

En esta versión:

- el login es demostrativo y se ejecuta en JavaScript;
- los datos viven en el navegador (`localStorage`);
- cada navegador/dispositivo tiene su propia copia de datos;
- las contraseñas demo pueden inspeccionarse en los archivos del sitio;
- no debe utilizarse para datos clínicos, personales o financieros reales.

Para una versión de producción multiusuario se necesita volver a conectar esta interfaz con una API y una base de datos.

## Credencial original

El proyecto ASP.NET proporcionaba:

- `admin@spaflow.local`
- `ChangeMe123!`

Se conserva en esta conversión. Las demás cuentas son perfiles de demostración para poder probar los roles que ya estaban definidos en el código original.
