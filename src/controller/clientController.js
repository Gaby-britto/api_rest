const clienteService = require("../services/clientServer");
const Cliente = require("../models/clientModel");

const clienteController = {
  create: async (req, res) => {
    try {
      const { nome, email } = req.body;

      const clienteCriado = await Cliente.create({
        nome,
        email,
      });

      return res.status(201).json({
        msg: "Cliente criado com sucesso!",
        cli: clienteCriado,
      });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({
          msg: "Ocorreu um erro no servidor. Por favor, tente novamente mais tarde.",
        });
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { nome, email } = req.body;

    try {
      const clienteUpdate = await Cliente.findByPk(id);
      if (clienteUpdate == null) {
        return res.status(404).json({
          msg: "Cliente não encontrado",
        });
      }

      const updatedCliente = await clienteUpdate.update({
        nome,
        email,
      });

      return res.status(200).json({
        msg: "Cliente atualizado com sucesso",
        cliente: updatedCliente,
      });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({
          msg: "Ocorreu um erro no servidor. Por favor, tente novamente mais tarde.",
        });
    }
  },

  getAll: async (req, res) => {
    try {
      const clientes = await clienteService.getAll();
      return res.status(200).json({
        msg: "Todos os Clientes",
        clientes,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Ocorreu um erro ao buscar os clientes. Por favor, tente novamente mais tarde.",
      });
    }
  },

  getOne: async (req, res) => {
    try {
      const cliente = await clienteService.getById(req.params.id);
      if (!cliente) {
        return res.status(404).json({
          msg: "Cliente não encontrado",
        });
      }
      return res.status(200).json({
        msg: "Cliente encontrado",
        cliente,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Ocorreu um erro ao buscar o cliente. Por favor, tente novamente mais tarde.",
      });
    }
  },

  delete: async (req, res) => {
    try {
      const clienteDeletado = await clienteService.delete(req.params.id);
      if (!clienteDeletado) {
        return res.status(404).json({
          msg: "Cliente não encontrado",
        });
      }
      return res.status(200).json({
        msg: "Cliente deletado com sucesso!",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Ocorreu um erro ao deletar o cliente. Por favor, tente novamente mais tarde.",
      });
    }
  },
};

module.exports = clienteController;
