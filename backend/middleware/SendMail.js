require("dotenv/config");
const { createTransport } = require("nodemailer");

const sendMail = async (text) => {
  const transporter = createTransport({
    host: process.env.HOST,
    port: process.env.PORTS,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  await transporter.sendMail({
    subject: "CONTACT REQUEST FROM PORTFOLIO",
    to: process.env.MYMAIL,
    from: process.env.MYMAIL,
    text,
  });
};

module.exports = { sendMail };
