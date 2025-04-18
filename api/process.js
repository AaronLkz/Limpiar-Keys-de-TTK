export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    const { link } = req.body;

    if (!link || !link.startsWith('http')) {
      return res.status(400).json({ error: 'Link no válido' });
    }

    return res.status(200).json({ message: '¡Link recibido!', linkProcesado: link });
  } catch (error) {
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}
