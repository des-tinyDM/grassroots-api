const Joi = require("joi");
module.exports = [
  {
    method: "GET",
    path: "/api/v1/events",
    config: {
      description: "Get all events",
      tags: ["api", "v1", "event"]
    },
    handler(req, reply) {
      return "<h1>events</h1>";
    }
  },
  {
    method: "GET",
    path: "/api/v1/events/{id}",
    config: {
      description: "Get event by id",
      tags: ["api", "v1", "event"],
      notes: "Returns a todo item by the id passed in the path",
      validate: {
        params: {
          id: Joi.string()
            .guid({ version: "uuidv4" })
            .required()
            .description("the id for the event item")
        }
      }
    },
    handler(req, reply) {
      return "<h1>event by id</h1>";
    }
  },
  {
    method: "POST",
    path: "/api/v1/events",
    config: {
      description: "Get event by id",
      tags: ["api", "v1", "event", "new"],
      notes: "Creates a new event"
    },
    handler(req, reply) {
      return "<h1>Add a new event</h1>";
    }
  },
  {
    method: "PUT",
    path: "/api/v1/events/{id}",
    config: {
      description: "Edit event",
      tags: ["api", "v1", "event", "update", "edit"],
      notes: "Edits an existing event",
      validate: {
        params: {
          id: Joi.string()
            .guid({ version: "uuidv4" })
            .required()
            .description("the id for the event item")
        }
      }
    },
    handler(req, reply) {
      return "<h1>Edits a new event</h1>";
    }
  },
  {
    method: "DELETE",
    path: "/api/v1/events/{id}",
    config: {
      description: "Delete event",
      tags: ["api", "v1", "event", "update", "delete"],
      notes: "Deletes an existing event",
      validate: {
        params: {
          id: Joi.string()
            .guid({ version: "uuidv4" })
            .required()
            .description("the id for the event item")
        }
      }
    },
    handler(req, reply) {
      return "<h1>Delete a new event</h1>";
    }
  }
];
