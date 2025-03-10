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

const deleteDashboard = async (req, res, next) => {
  try {
    res.json({ message: 'Delete' });
  } catch (error) {
    next(error);
  }
};

const duplicateDashboard = async (req, res, next) => {
  try {
    res.json({ message: 'Duplicate' });
  } catch (error) {
    next(error);
  }
};
