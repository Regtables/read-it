import { v4 as uuid } from "uuid";

const redirectURI = 'http://localhost:3000/'
const state = uuid();
const clientID = '6NtCFg78zX55YmFoecxv0Q'
const clientSecret = 'qrwLeFO45LQUqC1YA4jJ62J3Qh8PwA'
const responseType = 'code'
const duration = 'permanent'
const scope = 'read'

let accessToken;


export const getToken = async () => {

  if(accessToken){
    console.log(accessToken)
    return accessToken

  } 
  
  const code = window.location.href.match(/code=([^&]*)/);
  const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
  const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

  console.log(code)
  const returnedCode = code[1]

  if(returnedCode){

    console.log('test 2')
    console.log(returnedCode)

    const form = new URLSearchParams({
      grant_type: "authorization_code",
      code: returnedCode,
      redirect_uri: redirectURI
    })


    const res = await fetch('https://www.reddit.com/api/v1/access_token', { 
      method: "POST",
      post_data: `grant_type=password&username=${clientID}&password=${clientSecret}`,
      headers: {
        Authorization: {
          user: clientID,
          password: clientSecret
        },
      },
      body: form
    })
    if (!res.ok) throw new Error(`${res.status}: ${await res.text()}`)

    console.log(res.json())
    accessToken = code[0]
    console.log(code)

    return res.json()

    
   
  } else {

    console.log('test')

    const accessUrl= `https://www.reddit.com/api/v1/authorize?client_id=${clientID}&response_type=${responseType}&state=${state}&redirect_uri=${redirectURI}&duration=${duration}&scope=${scope}`

    window.location = accessUrl;

  }

}

export const getPosts = async () => {
      const response = await fetch('https://www.reddit.com/r/memes.json')
    
      const json = await response.json();
      
      const data = json.data.children.map((post) => post.data)

      

      return data; 
    
}

export const getSubReddit = async () => {
  const response = await fetch('https://www.reddit.com/r/leagueoflegends/about.json')

  const json = await response.json();

  const data = Object.values(json).map((info) => info)
  // console.log(data)
  // console.log(data[1].icon_img)
  return data; 
}

// getSubReddit();
