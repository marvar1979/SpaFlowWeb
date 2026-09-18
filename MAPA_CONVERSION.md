# Mapa de conversión

| Proyecto original | Versión HTML/CSS/JS/JSON |
|---|---|
| `Pages/Dashboard` | Vista `dashboard` en `js/app.js` |
| `Pages/Appointments` | Vista `appointments`, modal de alta y flujo de estados |
| `AppointmentService.ValidateAvailabilityAsync` | `appointmentConflict()` |
| `Pages/Booking` | `#booking` + formulario público |
| `Pages/Clients` | Vista `clients`, formularios y ficha/historial |
| `Pages/Services` | Vista `services` |
| `Pages/Employees` | Vista `employees` |
| `Pages/Inventory` | Vista `inventory` + movimientos |
| `Pages/Reports` | Vista `reports` |
| `Pages/Settings` | Vista `settings` |
| ASP.NET Core Identity | Sesión demo en `localStorage` |
| Entity Framework / SQL Server | JSON inicial + `localStorage` |
| `Sale`, `Payment`, `Expense` | Vistas de ventas, pagos y gastos |
| `MembershipPlan`, `ClientMembership`, `GiftCard` | Vista de membresías y gift cards |
| `AuditLog` | Vista de auditoría local |
| `SpaBusiness`, `Branch`, `Room` | Configuración de negocio/sucursal/cabinas |

## Qué no puede equivaler a una aplicación estática

No existe autenticación segura del servidor, bloqueo de intentos real, cookies HttpOnly, aislamiento multiusuario ni transacciones SQL. La UI y las reglas funcionales se reproducen en JavaScript para uso académico, demostrativo y de portafolio.
