const createDashboard = async (req, res, next) => {
  try {
    res.json({ message: 'Dashboard' });
  } catch (error) {
    next(error);
  }
};

const updateDashboard = async (req, res, next) => {
  try {
    res.json({ message: 'Update' });
  } catch (error) {
    next(error);
  }
};
