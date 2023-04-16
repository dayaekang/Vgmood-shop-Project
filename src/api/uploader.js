//파일을 받으면 cloudinary에 upload해주고
//업로드 된 url 리턴해주는 func
export async function uploadImage(file) {
    const data = new FormData();
    data.append('file', file);
    data.append("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET);
    
    return fetch(process.env.REACT_APP_CLOUDINARY_URL, {
        method: "POST",
        body: data
      })
      .then((res) => res.json())
      .then((data) => data.url);
  
}
