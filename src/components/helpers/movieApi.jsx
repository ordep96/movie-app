const apiKey = 'fab2f2eade88ae1d097cc79b5dfd8e81';


const getData = url => (
  fetch(url)
    .then(response => response.json())
)

const excerpt = text => {
  return `${text.substr(0,120)}...`;
}


export{
  apiKey,
  getData,
  excerpt
}