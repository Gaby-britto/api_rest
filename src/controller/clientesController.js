const adminService = require("../services/adminService");
const Cliente = require("../models/clientes");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

const clienteController = {
  //   login: async (req, res) => {
  //     try {
  //       const { email, senha } = req.body;
  //       const admin = await Admin.findOne({ where: { email } });
  //       if (!admin) {
  //         return res.status(400).json({
  //           msg: "Email ou senha incorretos",
  //         });
  //       }

  //       const isValid = await bcrypt.compare(senha, admin.senha);
  //       if (!isValid) {
  //         return res.status(400).json({
  //           msg: "Email ou senha incorretos",
  //         });
  //       }

  //     //   const token = jwt.sign(
  //     //     {
  //     //       email: admin.email,
  //     //       nome: admin.nome,
  //     //     },
  //     //     process.env.SECRET,
  //     //     { expiresIn: "1hr" }
  //     //   );

  //       return res.status(200).json({
  //         msg: "Login realizado!",
  //         token,
  //       });
  //     } catch (error) {
  //       console.error(error);
  //       return res.status(500).json({
  //         msg: "Acione o Suporte",
  //       });
  //     }
  //   },
  create: async (req, res) => {
    try {
      const { nome, email } = req.body;

      const clienteCriado = await Cliente.create({
        nome,
        email,
      });

      return res.status(200).json({
        msg: "Admin criado com sucesso!",
        cli: clienteCriado,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o suporte" });
    }
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { nome, email } = req.body;

    console.log({ id });
    console.log({ nome, email });

    try {
      const clienteUpadte = await Cliente.findByPk(id);
      if (clienteUpadte == null) {
        return res.status(404).json({
          msg: "Cliente não encontrado",
        });
      }

      const upadate = await clienteUpadte.update({
        nome,
        email,
      });

      if (upadate) {
        return res.status(200).json({
          msg: "Cliente atualizado com sucesso",
        });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o suporte" });
    }
  },
  //   updateSenha: async (req, res) => {
  //     const { id } = req.params;
  //     const { senha } = req.body;

  //     console.log({ id });
  //     console.log({ senha });

  //     try {
  //       const senhaUpadte = await Admin.findByPk(id);
  //       if (senhaUpadte == null) {
  //         return res.status(404).json({
  //           msg: "Admin não encontrado",
  //         });
  //       }

  //       const hashSenha = await bcrypt.hash(senha, 10);

  //       const upadate = await senhaUpadte.update({
  //         senha: hashSenha,
  //       });

  //       if (upadate) {
  //         return res.status(200).json({
  //           msg: "Senha atualizada com sucesso",
  //         });
  //       }
  //     } catch (error) {
  //       console.error(error);
  //       return res.status(500).json({ msg: "Acione o suporte" });
  //     }
  //   },
  getAll: async (req, res) => {
    try {
      const clientes = await clientesService.getAll();
      return res.status(200).json({
        msg: "Todos os Clientes: ",
        clientes,
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Ocorreu um erro no servidor",
      });
    }
  },
  getOne: async (req, res) => {
    try {
      const cliente = await clienteService.getById(req.params.id);
      if (!cliente) {
        return res.status(400).json({
          msg: "Cliente não encontrado                                                                      ",
        });
      }
      return res.status(200).json({
        msg: "Cliente encontrado",
        cliente,
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Ocorreu um erro no servidor",
      });
    }
  },
  delete: async (req, res) => {
    try {
      const clienteDeletedo = await clienteService.delete(req.params.id);
      if (!clienteDeletedo) {
        return res.status(400).json({
          msg: "Cliente não encontrado",
        });
      }
      return res.status(200).json({
        msg: "Cliente deletado com sucesso!",
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Ocorreu um erro no servidor",
      });
    }
  },
};

module.exports = clienteController;
