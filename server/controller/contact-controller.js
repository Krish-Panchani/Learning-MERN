const contact = require("../model/contact-model");

const contactForm = async (req, res) => {
  try {
    const response = req.body;
    await contact.create(response);
    return res.status(200).json({ message: "Contact form submitted" });

  } catch (err) {
    return res.status(500).json({ message: "Message not Delivered" });
  }
};