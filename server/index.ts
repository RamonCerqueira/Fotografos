import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.use(express.json());

  // Serve static files from dist in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? __dirname
      : path.resolve(__dirname, "..", "dist");

  app.use(express.static(staticPath));

  // Email sending endpoint
  app.post("/api/send-email", async (req, res) => {
    const { name, whatsapp, message, plan, layoutModel, currentSite, instagram } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ramonssa100@gmail.com",
        pass: "zvftljfmekuyuukw",
      },
    });

    const mailOptions = {
      from: "ramonssa100@gmail.com",
      to: "ramonssa100@gmail.com",
      subject: `Novo Contato do Site - ${name}`,
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
        <h3>Novo contato recebido através do site</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp}</p>
        ${instagram ? `<p><strong>Instagram:</strong> ${instagram}</p>` : ""}
        ${currentSite ? `<p><strong>Site Atual:</strong> ${currentSite}</p>` : ""}
        ${plan ? `<p><strong>Plano Escolhido:</strong> ${plan}</p>` : ""}
        ${layoutModel ? `<p><strong>Modelo de Layout:</strong> ${layoutModel}</p>` : ""}
        <br/>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email enviado com sucesso!" });
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      res.status(500).json({ error: "Erro ao enviar email" });
    }
  });

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
