# Files uploading with Formidable (pure Node.js)

## Project Description

If you want to upload multiple files to server and you want to do is without using "html's submit button"/
but from "javascript's DOM", this project is for you. In this project, the main point is when we send the "POST" request to server, how we going to pack the files.

### Tech

- HTML
- JavaScript
- Node.js

### Node Module

- Formidable

## How should we pack the files

some HTML code

```
<form enctype="multipart/form-data" method="post" id="form">
    <input type="file" name="image" id="files" multiple />
    <button type="button" onclick="uploadFiles()" id="uploadButton">
    upload
    </button>
</form>
```

Mostly we just think to take the "file input" and send as request's body. Like this/

wrong code`#FF0000`

```
const filesInput = document.getElementById("files");

const uploadFiles = async () => {
  const response = await fetch("http://localhost:3000/upload", {
    method: "POST",
    body: filesInput.files,
  });
  console.log(await response.json());
};
```

If you send like above, the payload will be like this. So this is not working.
![wrong payload](<./public/Screenshot%20(71).png>)
/

So we have to create formData. To create a formData we don't need to use "input tag". We are going to use "form tag". and we send the formData as request's body.
Right code`#00FF00`

```
const form = document.getElementById("form");

const uploadFiles = async () => {
  const formData = new FormData(form);        // created formData
  const response = await fetch("http://localhost:3000/upload", {
    method: "POST",
    body: formData,                           // send as request's body
  });
  console.log(await response.json());
};

```

And then the payload will be like this
![Right payload](<./public/Screenshot%20(72).png>)
