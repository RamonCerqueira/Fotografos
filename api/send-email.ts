import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  // Configurar CORS
  response.setHeader('Access-Control-Allow-Credentials', 'true');
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  response.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Tratamento para requisição OPTIONS (Preflight)
  if (request.method === 'OPTIONS') {
    response.status(200).end();
    return;
  }

  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const { name, whatsapp, message, plan, layoutModel, currentSite, instagram } = request.body;

  // Credenciais via variáveis de ambiente
  // Fallback para valores hardcoded apenas para teste local se .env falhar, 
  // mas o ideal é SEMPRE usar variáveis de ambiente na Vercel.
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (!user || !pass) {
    console.error('Configuração de email ausente. Verifique EMAIL_USER e EMAIL_PASS.');
    return response.status(500).json({ error: 'Configuração de servidor de email incompleta.' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user,
      pass,
    },
  });

  const mailOptions = {
    from: user,
    to: user, // Envia para você mesmo
    replyTo: user, // Opcional: poderia ser o email do cliente se tivesse
    subject: `Novo Lead do Site - ${name}`,
    text: `
      Novo contato recebido através do site:
      
      Nome: ${name}
      WhatsApp: ${whatsapp}
      ${instagram ? `Instagram: ${instagram}` : ""}
      ${currentSite ? `Site Atual: ${currentSite}` : ""}
      ${plan ? `Plano Escolhido: ${plan}` : ""}
      ${layoutModel ? `Modelo de Layout: ${layoutModel}` : ""}
      
      Mensagem:
      ${message}
    `,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Novo Lead Capturado 🚀</h2>
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px;">
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>WhatsApp:</strong> <a href="https://wa.me/55${whatsapp.replace(/\D/g, '')}">${whatsapp}</a></p>
          ${instagram ? `<p><strong>Instagram:</strong> ${instagram}</p>` : ""}
          ${currentSite ? `<p><strong>Site Atual:</strong> ${currentSite}</p>` : ""}
          ${plan ? `<p><strong>Plano Escolhido:</strong> ${plan}</p>` : ""}
          ${layoutModel ? `<p><strong>Modelo de Layout:</strong> ${layoutModel}</p>` : ""}
        </div>
        <div style="margin-top: 20px;">
          <h3 style="color: #666;">Mensagem:</h3>
          <p style="background-color: #fff; padding: 15px; border: 1px solid #eee; border-radius: 4px;">${message}</p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return response.status(200).json({ message: 'Email enviado com sucesso!' });
  } catch (error: any) {
    console.error('Erro ao enviar email:', error);
    return response.status(500).json({ error: 'Erro ao enviar email: ' + error.message });
  }
}
