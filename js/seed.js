window.SPAFLOW_SEED = {
  "appointments": {
    "appointments": [
      {
        "id": 1,
        "spaBusinessId": 1,
        "branchId": 1,
        "clientId": 1,
        "employeeId": 1,
        "roomId": 1,
        "startAt": "$TODAY+0T10:00",
        "endAt": "$TODAY+0T11:00",
        "status": "Confirmed",
        "source": "Reception",
        "paymentStatus": "Pending",
        "total": 180,
        "discount": 0,
        "notes": "",
        "createdByUserId": "u-admin",
        "items": [
          {
            "id": 1,
            "spaServiceId": 1,
            "quantity": 1,
            "durationMinutes": 60,
            "unitPrice": 180
          }
        ],
        "createdAt": "$TODAY-2T09:00",
        "isActive": true
      },
      {
        "id": 2,
        "spaBusinessId": 1,
        "branchId": 1,
        "clientId": 2,
        "employeeId": 2,
        "roomId": 2,
        "startAt": "$TODAY+0T12:00",
        "endAt": "$TODAY+0T13:15",
        "status": "Pending",
        "source": "WhatsApp",
        "paymentStatus": "Pending",
        "total": 250,
        "discount": 0,
        "notes": "Confirmar 1 hora antes",
        "createdByUserId": "u-reception",
        "items": [
          {
            "id": 2,
            "spaServiceId": 3,
            "quantity": 1,
            "durationMinutes": 75,
            "unitPrice": 250
          }
        ],
        "createdAt": "$TODAY-1T13:00",
        "isActive": true
      },
      {
        "id": 3,
        "spaBusinessId": 1,
        "branchId": 1,
        "clientId": 3,
        "employeeId": 3,
        "roomId": 1,
        "startAt": "$TODAY+0T15:30",
        "endAt": "$TODAY+0T16:30",
        "status": "CheckedIn",
        "source": "Phone",
        "paymentStatus": "Paid",
        "total": 220,
        "discount": 0,
        "notes": "",
        "createdByUserId": "u-reception",
        "items": [
          {
            "id": 3,
            "spaServiceId": 2,
            "quantity": 1,
            "durationMinutes": 60,
            "unitPrice": 220
          }
        ],
        "createdAt": "$TODAY-4T10:00",
        "isActive": true
      },
      {
        "id": 4,
        "spaBusinessId": 1,
        "branchId": 1,
        "clientId": 1,
        "employeeId": 1,
        "roomId": 1,
        "startAt": "$TODAY-5T15:00",
        "endAt": "$TODAY-5T16:00",
        "status": "Completed",
        "source": "Web",
        "paymentStatus": "Paid",
        "total": 180,
        "discount": 0,
        "notes": "Reserva web",
        "createdByUserId": null,
        "items": [
          {
            "id": 4,
            "spaServiceId": 1,
            "quantity": 1,
            "durationMinutes": 60,
            "unitPrice": 180
          }
        ],
        "createdAt": "$TODAY-7T11:00",
        "isActive": true
      },
      {
        "id": 5,
        "spaBusinessId": 1,
        "branchId": 1,
        "clientId": 3,
        "employeeId": 2,
        "roomId": 2,
        "startAt": "$TODAY-2T17:00",
        "endAt": "$TODAY-2T18:15",
        "status": "Completed",
        "source": "Reception",
        "paymentStatus": "Paid",
        "total": 250,
        "discount": 0,
        "notes": "",
        "createdByUserId": "u-admin",
        "items": [
          {
            "id": 5,
            "spaServiceId": 3,
            "quantity": 1,
            "durationMinutes": 75,
            "unitPrice": 250
          }
        ],
        "createdAt": "$TODAY-6T12:00",
        "isActive": true
      },
      {
        "id": 6,
        "spaBusinessId": 1,
        "branchId": 1,
        "clientId": 4,
        "employeeId": 3,
        "roomId": 1,
        "startAt": "$TODAY+1T09:30",
        "endAt": "$TODAY+1T10:30",
        "status": "Pending",
        "source": "Web",
        "paymentStatus": "Pending",
        "total": 180,
        "discount": 0,
        "notes": "Primera visita",
        "createdByUserId": null,
        "items": [
          {
            "id": 6,
            "spaServiceId": 1,
            "quantity": 1,
            "durationMinutes": 60,
            "unitPrice": 180
          }
        ],
        "createdAt": "$TODAY+0T08:00",
        "isActive": true
      }
    ]
  },
  "audit": {
    "auditLogs": [
      {
        "id": 1,
        "spaBusinessId": 1,
        "userId": "u-admin",
        "action": "Seed",
        "entityName": "System",
        "entityId": "1",
        "details": "Datos demostrativos inicializados.",
        "ipAddress": "local",
        "createdAt": "$TODAY-30T09:00"
      }
    ]
  },
  "business": {
    "business": {
      "id": 1,
      "name": "SpaFlow Demo",
      "legalName": "SpaFlow Demo",
      "phone": "+591 70000000",
      "email": "contacto@spaflow.local",
      "address": "Av. Principal 123, Cochabamba",
      "currency": "BOB",
      "timeZoneId": "America/La_Paz",
      "isActive": true
    },
    "branches": [
      {
        "id": 1,
        "spaBusinessId": 1,
        "name": "Sucursal Principal",
        "address": "Av. Principal 123, Cochabamba",
        "phone": "+591 70000000",
        "isActive": true
      }
    ],
    "rooms": [
      {
        "id": 1,
        "spaBusinessId": 1,
        "branchId": 1,
        "name": "Cabina 1",
        "description": "Masajes y tratamientos corporales",
        "capacity": 1,
        "isActive": true
      },
      {
        "id": 2,
        "spaBusinessId": 1,
        "branchId": 1,
        "name": "Cabina 2",
        "description": "Faciales y bienestar",
        "capacity": 1,
        "isActive": true
      }
    ]
  },
  "clients": {
    "clients": [
      {
        "id": 1,
        "spaBusinessId": 1,
        "fullName": "Cliente Demo",
        "phone": "+591 70000002",
        "email": "cliente.demo@example.com",
        "birthDate": "1992-06-18",
        "notes": "Prefiere horarios por la tarde.",
        "allergies": "Ninguna informada",
        "contraindications": "Ninguna informada",
        "marketingConsent": true,
        "treatmentConsent": true,
        "loyaltyPoints": 120,
        "lastVisitAt": "$TODAY-5T15:00",
        "createdAt": "$TODAY-120T10:00",
        "isActive": true
      },
      {
        "id": 2,
        "spaBusinessId": 1,
        "fullName": "Andrea Flores",
        "phone": "+591 72223333",
        "email": "andrea@example.com",
        "birthDate": "1988-09-05",
        "notes": "",
        "allergies": "Sensibilidad a fragancias fuertes",
        "contraindications": "",
        "marketingConsent": false,
        "treatmentConsent": true,
        "loyaltyPoints": 60,
        "lastVisitAt": "$TODAY-15T11:00",
        "createdAt": "$TODAY-90T09:20",
        "isActive": true
      },
      {
        "id": 3,
        "spaBusinessId": 1,
        "fullName": "María Salas",
        "phone": "+591 74445555",
        "email": "maria@example.com",
        "birthDate": "1995-02-11",
        "notes": "Cliente frecuente",
        "allergies": "",
        "contraindications": "",
        "marketingConsent": true,
        "treatmentConsent": true,
        "loyaltyPoints": 210,
        "lastVisitAt": "$TODAY-2T17:00",
        "createdAt": "$TODAY-45T14:00",
        "isActive": true
      },
      {
        "id": 4,
        "spaBusinessId": 1,
        "fullName": "Patricia Guzmán",
        "phone": "+591 76667777",
        "email": "patricia@example.com",
        "birthDate": "1990-12-02",
        "notes": "",
        "allergies": "",
        "contraindications": "Embarazo: confirmar tratamientos aplicables",
        "marketingConsent": true,
        "treatmentConsent": true,
        "loyaltyPoints": 30,
        "lastVisitAt": null,
        "createdAt": "$TODAY-8T12:30",
        "isActive": true
      }
    ]
  },
  "commerce": {
    "sales": [
      {
        "id": 1,
        "spaBusinessId": 1,
        "branchId": 1,
        "clientId": 3,
        "soldAt": "$TODAY-2T18:20",
        "subtotal": 88,
        "discount": 0,
        "total": 88,
        "items": [
          {
            "id": 1,
            "productId": 3,
            "spaServiceId": null,
            "quantity": 1,
            "unitPrice": 88,
            "lineTotal": 88
          }
        ]
      }
    ],
    "payments": [
      {
        "id": 1,
        "spaBusinessId": 1,
        "appointmentId": 4,
        "saleId": null,
        "clientId": 1,
        "method": "Qr",
        "status": "Paid",
        "amount": 180,
        "reference": "QR-DEMO-001",
        "paidAt": "$TODAY-5T16:05"
      },
      {
        "id": 2,
        "spaBusinessId": 1,
        "appointmentId": 5,
        "saleId": null,
        "clientId": 3,
        "method": "Card",
        "status": "Paid",
        "amount": 250,
        "reference": "POS-001",
        "paidAt": "$TODAY-2T18:18"
      },
      {
        "id": 3,
        "spaBusinessId": 1,
        "appointmentId": 3,
        "saleId": null,
        "clientId": 3,
        "method": "Cash",
        "status": "Paid",
        "amount": 220,
        "reference": "",
        "paidAt": "$TODAY+0T15:20"
      },
      {
        "id": 4,
        "spaBusinessId": 1,
        "appointmentId": null,
        "saleId": 1,
        "clientId": 3,
        "method": "Cash",
        "status": "Paid",
        "amount": 88,
        "reference": "",
        "paidAt": "$TODAY-2T18:20"
      }
    ],
    "expenses": [
      {
        "id": 1,
        "spaBusinessId": 1,
        "branchId": 1,
        "concept": "Material de limpieza",
        "amount": 95,
        "expenseAt": "$TODAY-7T09:10",
        "notes": "Compra semanal"
      }
    ]
  },
  "employees": {
    "employees": [
      {
        "id": 1,
        "spaBusinessId": 1,
        "branchId": 1,
        "applicationUserId": "u-therapist",
        "fullName": "Profesional Demo",
        "specialty": "Masajes y bienestar",
        "phone": "+591 70000001",
        "email": "terapeuta@spaflow.local",
        "commissionPercent": 10,
        "serviceIds": [
          1,
          2,
          3
        ],
        "isActive": true
      },
      {
        "id": 2,
        "spaBusinessId": 1,
        "branchId": 1,
        "fullName": "Carla Mendoza",
        "specialty": "Faciales y skincare",
        "phone": "+591 70000003",
        "email": "carla@spaflow.local",
        "commissionPercent": 12,
        "serviceIds": [
          3
        ],
        "isActive": true
      },
      {
        "id": 3,
        "spaBusinessId": 1,
        "branchId": 1,
        "fullName": "Lucía Rojas",
        "specialty": "Masoterapia",
        "phone": "+591 70000004",
        "email": "lucia@spaflow.local",
        "commissionPercent": 10,
        "serviceIds": [
          1,
          2
        ],
        "isActive": true
      }
    ],
    "schedules": [
      {
        "id": 1,
        "employeeId": 1,
        "dayOfWeek": 1,
        "startTime": "09:00",
        "endTime": "18:00",
        "isDayOff": false
      },
      {
        "id": 2,
        "employeeId": 1,
        "dayOfWeek": 2,
        "startTime": "09:00",
        "endTime": "18:00",
        "isDayOff": false
      },
      {
        "id": 3,
        "employeeId": 2,
        "dayOfWeek": 1,
        "startTime": "10:00",
        "endTime": "19:00",
        "isDayOff": false
      }
    ]
  },
  "inventory": {
    "productCategories": [
      {
        "id": 1,
        "spaBusinessId": 1,
        "name": "Cuidado personal",
        "isActive": true
      },
      {
        "id": 2,
        "spaBusinessId": 1,
        "name": "Insumos de cabina",
        "isActive": true
      }
    ],
    "products": [
      {
        "id": 1,
        "spaBusinessId": 1,
        "productCategoryId": 1,
        "name": "Aceite corporal",
        "sku": "SPA-001",
        "barcode": "7790001001",
        "cost": 35,
        "salePrice": 65,
        "stock": 10,
        "minimumStock": 3,
        "isActive": true
      },
      {
        "id": 2,
        "spaBusinessId": 1,
        "productCategoryId": 2,
        "name": "Mascarilla facial hidratante",
        "sku": "SPA-002",
        "barcode": "7790001002",
        "cost": 22,
        "salePrice": 45,
        "stock": 2,
        "minimumStock": 4,
        "isActive": true
      },
      {
        "id": 3,
        "spaBusinessId": 1,
        "productCategoryId": 1,
        "name": "Crema nutritiva",
        "sku": "SPA-003",
        "barcode": "7790001003",
        "cost": 48,
        "salePrice": 88,
        "stock": 6,
        "minimumStock": 2,
        "isActive": true
      }
    ],
    "movements": [
      {
        "id": 1,
        "spaBusinessId": 1,
        "branchId": 1,
        "productId": 1,
        "type": "Purchase",
        "quantity": 10,
        "occurredAt": "$TODAY-20T10:00",
        "notes": "Stock inicial"
      },
      {
        "id": 2,
        "spaBusinessId": 1,
        "branchId": 1,
        "productId": 2,
        "type": "InternalUse",
        "quantity": -2,
        "occurredAt": "$TODAY-2T16:00",
        "notes": "Uso en cabina"
      }
    ]
  },
  "memberships": {
    "membershipPlans": [
      {
        "id": 1,
        "spaBusinessId": 1,
        "name": "Bienestar Mensual",
        "description": "Descuento en servicios durante 30 días.",
        "durationDays": 30,
        "price": 180,
        "serviceDiscountPercent": 10,
        "isActive": true
      }
    ],
    "clientMemberships": [
      {
        "id": 1,
        "spaBusinessId": 1,
        "clientId": 1,
        "membershipPlanId": 1,
        "startDate": "$TODAY-10",
        "endDate": "$TODAY+20",
        "isActive": true
      }
    ],
    "giftCards": [
      {
        "id": 1,
        "spaBusinessId": 1,
        "code": "SPA-GIFT-001",
        "initialBalance": 300,
        "currentBalance": 300,
        "expiresOn": "$TODAY+90",
        "assignedClientId": 2,
        "isActive": true
      }
    ]
  },
  "services": {
    "categories": [
      {
        "id": 1,
        "spaBusinessId": 1,
        "name": "Masajes",
        "displayOrder": 1,
        "isActive": true
      },
      {
        "id": 2,
        "spaBusinessId": 1,
        "name": "Faciales",
        "displayOrder": 2,
        "isActive": true
      },
      {
        "id": 3,
        "spaBusinessId": 1,
        "name": "Corporales",
        "displayOrder": 3,
        "isActive": true
      },
      {
        "id": 4,
        "spaBusinessId": 1,
        "name": "Manicure y Pedicure",
        "displayOrder": 4,
        "isActive": true
      }
    ],
    "services": [
      {
        "id": 1,
        "spaBusinessId": 1,
        "serviceCategoryId": 1,
        "name": "Masaje relajante",
        "description": "Masaje de relajación de cuerpo completo.",
        "durationMinutes": 60,
        "price": 180,
        "requiresRoom": true,
        "defaultCommissionPercent": 10,
        "isActive": true
      },
      {
        "id": 2,
        "spaBusinessId": 1,
        "serviceCategoryId": 1,
        "name": "Masaje descontracturante",
        "description": "Tratamiento manual enfocado en tensión muscular.",
        "durationMinutes": 60,
        "price": 220,
        "requiresRoom": true,
        "defaultCommissionPercent": 10,
        "isActive": true
      },
      {
        "id": 3,
        "spaBusinessId": 1,
        "serviceCategoryId": 2,
        "name": "Limpieza facial",
        "description": "Limpieza facial profunda y cuidado básico.",
        "durationMinutes": 75,
        "price": 250,
        "requiresRoom": true,
        "defaultCommissionPercent": 10,
        "isActive": true
      }
    ]
  },
  "users": {
    "users": [
      {
        "id": "u-super",
        "email": "superadmin@spaflow.local",
        "password": "Super123!",
        "fullName": "Super Administrador",
        "roles": [
          "SuperAdmin"
        ],
        "spaBusinessId": 1,
        "branchId": 1,
        "active": true
      },
      {
        "id": "u-admin",
        "email": "admin@spaflow.local",
        "password": "ChangeMe123!",
        "fullName": "Administrador SpaFlow",
        "roles": [
          "Admin",
          "Manager"
        ],
        "spaBusinessId": 1,
        "branchId": 1,
        "active": true
      },
      {
        "id": "u-manager",
        "email": "manager@spaflow.local",
        "password": "Manager123!",
        "fullName": "Gerencia SpaFlow",
        "roles": [
          "Manager"
        ],
        "spaBusinessId": 1,
        "branchId": 1,
        "active": true
      },
      {
        "id": "u-reception",
        "email": "recepcion@spaflow.local",
        "password": "Recep123!",
        "fullName": "Recepción SpaFlow",
        "roles": [
          "Receptionist"
        ],
        "spaBusinessId": 1,
        "branchId": 1,
        "active": true
      },
      {
        "id": "u-therapist",
        "email": "terapeuta@spaflow.local",
        "password": "Terapia123!",
        "fullName": "Profesional Demo",
        "roles": [
          "Therapist"
        ],
        "spaBusinessId": 1,
        "branchId": 1,
        "employeeId": 1,
        "active": true
      },
      {
        "id": "u-cashier",
        "email": "caja@spaflow.local",
        "password": "Caja123!",
        "fullName": "Caja SpaFlow",
        "roles": [
          "Cashier"
        ],
        "spaBusinessId": 1,
        "branchId": 1,
        "active": true
      }
    ]
  }
};
