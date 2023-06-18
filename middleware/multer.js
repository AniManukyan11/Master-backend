const multer = require('multer');
const fs = require('fs');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadsDirPath = path.join(__dirname, '..', 'uploads');
    
    cb(null, uploadsDirPath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const types = ['image/png', 'image/jpeg', 'image/jpg'];

function filterFile (req, file, cb) {
    if (types.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const upload = multer({ storage, filterFile });

module.exports = upload