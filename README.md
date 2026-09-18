# SpaFlow — HTML + CSS + JavaScript + JSON


#LINK: https://marvar1979.github.io/SpaFlowWeb/

Conversión del proyecto `SpaFlow` (ASP.NET Core 10 / Razor Pages / EF Core / SQL Server / Identity) a una aplicación web estática basada en:

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


## Credencial original

Se conserva en esta conversión. Las demás cuentas son perfiles de demostración para poder probar los roles que ya estaban definidos en el código original.
