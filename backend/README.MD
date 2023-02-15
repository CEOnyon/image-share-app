# Image Upload to S3
Using Express, AWS-SDK, and Cloudinary we will be able to do the following
things in order. Tested with NodeJS 18.

- Express receives a POST request with a new image.
- We validate uploaded content is in fact an image.
- We upload the validated image to S3 for storage.
- We create a Cloudinary URL to view the uploaded image.

## Development Notes
Libraries used require us to run this as a module. The following key needs
to be added to the `package.json` file. 

```json
"type": "module"
```

### Run Local Development
```bash
npm test
```

### Run Production && Heroku
```bash
npm start
```

### Run Postman (Newman) API tests through Docker
```bash
docker run -v `pwd`/postman:/etc/postman --network host -t postman/newman run /etc/postman/run.json
```