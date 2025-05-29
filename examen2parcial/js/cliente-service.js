const SUPABASE_URL = 'https://wbhdododubpattijmwkr.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndiaGRvZG9kdWJwYXR0aWptd2tyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5MTkxMzQsImV4cCI6MjA2MzQ5NTEzNH0._j9eFdUDSC6-Sojv2dO9WCJoyL87N1mLAaMAuh9Z-6k';
const TABLE = 'clientes';
const API_URL = `${SUPABASE_URL}/rest/v1/${TABLE}`;
const HEADERS = {
  'apikey': SUPABASE_KEY,
  'Authorization': `Bearer ${SUPABASE_KEY}`,
  'Content-Type': 'application/json',
};

const crearCliente = (nombre, email) => {
  const nuevo = { nombre, email };

  return fetch(API_URL, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify(nuevo)
  }).then(async res => {
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(errorText || 'error al insertar cliente');
    }

    try {
      return await res.json();
    } catch {
      return nuevo;
    }
  });
};

export const clienteService = {
  crearCliente
};
