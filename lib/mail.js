const nodemailer = require("nodemailer");
const { config } = require("./env");

function createTransport() {
  const { host, port, user, pass } = config.smtp;
  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: user ? { user, pass } : undefined,
  });
}

async function sendPasswordResetEmail({ to, resetUrl }) {
  if (!config.mailEnabled) {
    console.log(`[mail] SMTP не настроен. Ссылка для ${to}: ${resetUrl}`);
    return { sent: false };
  }

  const transporter = createTransport();
  await transporter.sendMail({
    from: config.smtp.from,
    to,
    subject: "Смена пароля",
    text: [
      "Вы запросили смену пароля в системе управления.",
      "",
      "Перейдите по ссылке, чтобы задать новый пароль:",
      resetUrl,
      "",
      "Ссылка действует 1 час. Если вы не запрашивали смену пароля, просто проигнорируйте это письмо.",
    ].join("\n"),
  });

  return { sent: true };
}

module.exports = { sendPasswordResetEmail };
