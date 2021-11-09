export const createGetHandler =
  (handler, status = 405) =>
  (req, res) => {
    const { method } = req;

    if (method === 'GET') {
      return handler(req, res);
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(status).end(`Method ${method} Not Allowed`);
    }
  };
