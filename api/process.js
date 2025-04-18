// /api/process.js
import fetch from 'node-fetch'; // Necesario para hacer solicitudes HTTP

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    const { link } = req.body;

    if (!link || !link.startsWith('http')) {
      return res.status(400).json({ error: 'Link no válido' });
    }

    // Solicitar el enlace original de TikTok
    const response = await fetch(link, { method: 'GET', redirect: 'follow' });
    const finalUrl = response.url;

    // Parsear el URL y eliminar parámetros de la URL
    const parsed = new URL(finalUrl);
    const cleanedUrl = `${parsed.protocol}//${parsed.host}${parsed.pathname}`;

    return res.status(200).json({ message: '¡Link limpio!', cleanUrl: cleanedUrl });
  } catch (error) {
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}
