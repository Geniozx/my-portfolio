const { Readable } = require("stream");

const cloudinary = require("../config/cloudinary");

function uploadProjectImage(fileBuffer) {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: "my-portfolio/projects",
        resource_type: "image",
      },
      (error, result) => {
        if (error) {
          return reject(error);
        }

        resolve(result);
      }
    );

    Readable.from(fileBuffer).pipe(uploadStream);
  });
}

async function deleteProjectImage(publicId) {
  return cloudinary.uploader.destroy(publicId, {
    resource_type: "image",
  });
}

module.exports = {
  uploadProjectImage,
  deleteProjectImage,
};