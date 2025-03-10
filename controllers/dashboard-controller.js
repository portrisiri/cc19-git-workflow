const createDashboard = async (req, res, next) => {
  try {
    res.json({ message: 'Dashboard' });
  } catch (error) {
    next(error);
  }
};
