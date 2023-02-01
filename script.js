const form = document.getElementById("form");

const uploadFiles = async () => {
  const formData = new FormData(form);
  const response = await fetch("http://localhost:3000/upload", {
    method: "POST",
    body: formData,
  });
  console.log(await response.json());
};
