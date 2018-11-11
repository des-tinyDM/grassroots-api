const Joi = require("joi");
module.exports = [
  {
    method: "GET",
    path: "/api/v1/campaigns",
    config: {
      description: "Get all campaigns",
      tags: ["api", "v1", "campaign"]
    },
    handler(req, reply) {
      return "<h1>Campaigns</h1>";
    }
  },
  {
    method: "GET",
    path: "/api/v1/campaigns/{id}",
    config: {
      description: "Get campaign by id",
      tags: ["api", "v1", "campaign"],
      notes: "Returns a todo item by the id passed in the path",
      validate: {
        params: {
          id: Joi.string()
            .guid({ version: "uuidv4" })
            .required()
            .description("the id for the campaign item")
        }
      }
    },
    handler(req, reply) {
      return "<h1>Campaign by id</h1>";
    }
  },
  {
    method: "POST",
    path: "/api/v1/campaigns",
    config: {
      description: "Create a new campaign",
      tags: ["api", "v1", "campaign", "new"],
      notes: "Creates a new campaign"
    },
    handler(req, reply) {
      return "<h1>Add a new Campaign</h1>";
    }
  },
  {
    method: "PUT",
    path: "/api/v1/campaigns/{id}",
    config: {
      description: "Edit campaign",
      tags: ["api", "v1", "campaign", "update", "edit"],
      notes: "Edits an existing campaign",
      validate: {
        params: {
          id: Joi.string()
            .guid({ version: "uuidv4" })
            .required()
            .description("the id for the campaign item")
        }
      }
    },
    handler(req, reply) {
      return "<h1>Edits a new Campaign</h1>";
    }
  },
  {
    method: "DELETE",
    path: "/api/v1/campaigns/{id}",
    config: {
      description: "Delete campaign",
      tags: ["api", "v1", "campaign", "update", "delete"],
      notes: "Deletes an existing campaign",
      validate: {
        params: {
          id: Joi.string()
            .guid({ version: "uuidv4" })
            .required()
            .description("the id for the campaign item")
        }
      }
    },
    handler(req, reply) {
      return "<h1>Edits a new Campaign</h1>";
    }
  }
];
