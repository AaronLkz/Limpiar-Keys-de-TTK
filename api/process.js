export default async function handler(req, res) {
  // Verifica que la solicitud sea un POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    // Obtener el 'link' del cuerpo de la solicitud
    const { link } = req.body;

    // Validar que el 'link' exista y comience con "http"
    if (!link || !link.startsWith('http')) {
      return res.status(400).json({ error: 'Link no válido' });
    }

    // Si el link es válido, enviar una respuesta con éxito
    return res.status(200).json({ message: '¡Link recibido!', linkProcesado: link });
  } catch (error) {
    // En caso de error, enviar una respuesta de error del servidor
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}
